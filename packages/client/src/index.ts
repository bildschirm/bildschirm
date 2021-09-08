import socketIO, { Socket } from 'socket.io-client';
import Nanobus from 'Nanobus';
import autoBind from 'auto-bind';
import {
	SyncErrorType,
	SyncDisconnectReason,
	ISyncClient,
	ISyncService,
	ISyncResponse,
	IStateChangeListener,
	IState,
} from '@bildschirm/types';
import { Logger } from './types';

/**
 * As ESDoc lacks a way to properly document events, this typedef shows all the different events the client might emit.
 * The "type" below is the callback argument for the listener.
 * @typedef SocketEvents
 * @property {void} connect Emitted on a successful connect to the server. Called after authentication.
 * @property {SyncDisconnectReason} disconnect Emitted when the client disconnected from the server. The disconnect reason indicates why.
 * @property {SyncSocketError, object} error Emitted when the encounters an error. The first argument is the {@link SocketError} object, indicating what the error object might be.
 * @property {Number} reconnecting Emitted once the clients starts trying to reconnect to the server. Attempt number passed to the listener.
 *
 * @example
 * client.on('error', (errorType, errorData) => {});
 * client.on('disconnect', reason => {});
 * client.on('reconnecting', attempt => {});
 */

/**
 * The mission control client class.
 *
 * You can easily build your own client implementation, this one is just easy to use and has everything you might need.
 *
 * The client hides the authentication implementation details from the user, by hijacking the `connect` event.
 * The connect event only gets called after the authentication scheme is successful.
 *
 * @since 0.0.1
 * @emits {connect} emit event when bar.
 */
export class BildschirmClient implements ISyncClient {
	logger: Logger;

	/**
	 * The JWT authentication token that is used to authenticate.
	 */
	authToken!: string;

	/**
	 * The socket.io socket used for the communication.
	 *
	 * While it is possible it is recommended not to use this variable directly and to use the exposed {@link MissionControlClient#action} and {@link MissionControlClient#subscribe} methods instead.
	 *
	 */
	socket!: Socket;

	/**
	 * The event bus used to communicate events within the client.
	 *
	 * While it is possible it is recommended not to use this variable directly and to use the exposed {@link MissionControlClient#on} and {@link MissionControlClient#subscribe} methods instead.
	 *
	 * @type socket.io-client~Nanobus
	 * @emits {SocketEvent}
	 * @since 1.0.0
	 */
	eventBus = new Nanobus();

	ready = false;

	protected services: Record<string, { listeners: number; state: IState }> =
		{};
	protected stateCache: Record<string, object> = {};

	/**
	 * The MissionControlClient constructor.
	 *
	 * @param url       - The mission control url the client should connect to.
	 * @param authToken - The JWT authentication token that should be used to authenticate.
	 */
	constructor(
		url: string,
		authToken: string,
		{ logger }: { logger?: Logger } = {}
	) {
		// URL and auth token are required parameters.
		if (!url) throw new Error('You need to pass an URL.');
		if (!authToken) throw new Error('You need to pass an Auth Token.');

		this.authToken = authToken;

		this.socket = socketIO(url, {
			path: '/api/socket.io',
		});

		const title = [
			'%cmission-control-client -',
			'color:#a78bfa; font-weight: bold; cursor: default; pointer-events: none;user-select: none;',
		];
		this.logger = logger || {
			debug: (...args) => console.log(...title, ...args),
			warn: (...args) => console.warn(...title, ...args),
			error: (...args) => console.error(...title, ...args),
		};

		this.setupSocketHandlers();

		autoBind(this);
	}

	readyListeners: Function[] = [];

	waitReady(): Promise<void> {
		return this.ready
			? Promise.resolve()
			: new Promise((resolve) => {
					this.readyListeners.push(resolve);
			  });
	}

	/**
	 * This function sets up all the listeners for the socket (connect, disconnect, error, reconnect, etc).
	 *
	 * Job of this function is to unify all error events into a shape that makes more sense. See {@link SocketError} for the possible errors.
	 */
	protected setupSocketHandlers() {
		this.socket.onAny((packet) => {
			const [event, ...args] = packet.data || [];

			// Here we only pass the event to our event bus if the events arent our
			// own SocketEvents. If we wouldnt do this it would cause a collision
			// where listeners would fire twice: once for the actual socket emit and once
			// for our event bus. This bypasses this.
			if (
				!['connect', 'disconnect', 'reconnecting', 'error'].includes(
					event
				)
			) {
				this.eventBus.emit(`internal:${event}`, ...args);
			}
		});

		// On connection we try to authenticate
		this.socket.on('connect', async () => {
			try {
				this.ready = false;

				this.logger.debug('auth:start');

				const response = await this._socketEmit('authenticate', {
					token: this.authToken,
				});

				this.ready = true;

				this.logger.debug('auth:complete', response);
				this.logger.debug('ready');

				// Re-Subscribe to all services that we're already subscribed to after reconnect
				for (const service in this.services) {
					this.logger.debug('subscribe to service:', service);

					this._socketEmit('subscribe', { service }).catch(
						this.reportError
					);
				}

				// // While we still have events to unsubscribe from, do so on connect
				// while (this._unsubscribeFrom.length > 0) {
				// 	this._socketEmit('unsubscribe', {
				// 		service: this._unsubscribeFrom.shift()
				// 	}).then(console.info).catch(console.error);
				// }

				// We simplify the event structure here, by emitting a 'connect' event rather than a 'ready' event.
				// This essentially hides the implementation details of the authentication flow from the client user
				// which is what we're aiming for by making the client simple.

				// Call every ready listener
				this.readyListeners.forEach((listener) => listener());

				this.eventBus.emit('connect');
			} catch (e) {
				this.ready = false;

				this.eventBus.emit('error', SyncErrorType.AUTH_FAILED, e);
			}
		});

		// On disconnect from server, reason can either be server disconnect, client disconnect or ping timeout.
		this.socket.on('disconnect', (reason) => {
			let disconnectReason;

			switch (reason) {
				case 'io server disconnect':
					disconnectReason = SyncDisconnectReason.SERVER_DISCONNECT;
					break;
				case 'io client disconnect':
					disconnectReason = SyncDisconnectReason.CLIENT_DISCONNECT;
					break;
				case 'ping timeout':
					disconnectReason = SyncDisconnectReason.CLIENT_DISCONNECT;
					break;
				default:
					disconnectReason = SyncDisconnectReason.UNKNOWN;
			}

			this.ready = false;

			this.eventBus.emit('disconnect', disconnectReason);
		});

		/*
		 * RECONNECTION
		 *
		 * On successful reconnect, attempt is the amount of attempts needed for the reconnect.
		 * As of right now, not really needed for anything,
		 * as the connect event fires on every successful connect, even reconnects.
		 * this.socket.on('reconnect', attempt => {});
		 */

		// On reconnect attempt, attempt is the current attempt number
		this.socket.on('reconnect_attempt', (attempt) => {
			this.ready = false;
			this.eventBus.emit('reconnecting', attempt);
		});

		/*
		 * SYNC
		 */
		this.socket.on('sync', ({ service: serviceName, state }) => {
			try {
				this.logger.debug(
					'sync – service:',
					serviceName,
					'state:',
					state
				);

				if (!this.services[serviceName]) {
					return this.logger.warn(
						'received sync update for unsubscribed service',
						serviceName,
						state
					);
				}

				this.services[serviceName].state = state;
				this.eventBus.emit(`sync:${serviceName}`, state);
			} catch (e) {
				this.reportError(e);
			}
		});

		/*
		 * ERROR HANDLING
		 */
		this._setupErrorHandlers();
	}

	_setupErrorHandlers() {
		// On a general connection error, the error object is the error thrown
		this.socket.on('connect_error', (error) => {
			this.ready = false;

			// TODO: determine errorType
			this.eventBus.emit('error', SyncErrorType.GENERAL, error);
		});

		// On a ping/connection timeout error, the timeout object is IDK what
		// TODO: what is the timeout object?
		this.socket.on('connect_timeout', (timeout) => {
			this.ready = false;

			this.eventBus.emit('error', SyncErrorType.TIMEOUT, timeout);
		});

		// Called when we can't authenticate because of an invalid auth token or because
		// the client took too long to authenticate.
		this.socket.on('authentication_timeout', ({ error }) => {
			this.ready = false;

			this.eventBus.emit('error', SyncErrorType.AUTH_TIMEOUT, error);
		});

		// On reconnect error, dont know if needed for now
		// this.socket.on('reconnect_error', error => {});

		// On reconnection failed, fired becayse we run out of attempts
		// and not because there is an error in the connection
		this.socket.on('reconnect_failed', () => {
			this.ready = false;

			this.eventBus.emit('error', SyncErrorType.NO_ATTEMPTS_LEFT);
		});
	}

	/**
	 * Internal socket emit helper
	 * @async
	 * @protected
	 * @param  {string} event Event to emit
	 * @param  {[type]} data  Data to send
	 * @return {object}       Response data
	 * @throws Error
	 */
	_socketEmit(event: string, data: object) {
		return new Promise((resolve, reject) => {
			this.socket.emit(event, data, (response: ISyncResponse) => {
				if (response.error) {
					return reject(new Error(response.error.message));
				}

				resolve(response);
			});
		});
	}

	/**
	 * Listen to a socket event.
	 *
	 * Please note, if you want to subscribe to action or state events, please use the {@link subscribe} method.
	 * The returned function can be used to unsubscribe from the event listener again.
	 * This makes it possible to for example remove inline listeners.
	 *
	 * @param {string} event - The socket event you want to listen to.
	 * @param {function(data: object)} listener - The listener function that will be called on event.
	 * @return {function} Returns a function which you can use to remove the event listener.
	 *
	 * @since 1.0.0
	 * @example
	 * on('connect', () => {})
	 * on('error', (errorType, errorObject) => {})
	 */
	on(event: string, listener: EventListener) {
		this.eventBus.on(event, listener);

		return () => this.eventBus.removeListener(event, listener);
	}

	/**
	 * Listen to a socket event, and clear it after it's been called once.
	 *
	 * Please note, if you want to subscribe to action or state events, please use the {@link subscribe} method.
	 * The returned function can be used to unsubscribe from the event listener again.
	 * This makes it possible to for example remove inline listeners.
	 *
	 * @param {string} event - The socket event you want to listen to.
	 * @param {function(data: object)} listener - The listener function that will be called on event once.
	 * @return {function} Returns a function which you can use to remove the event listener.
	 *
	 * @since 1.0.0
	 * @example
	 * once('connect', (data) => {})
	 */
	once(event: string, listener: EventListener) {
		this.eventBus.once(event, listener);

		return () => this.eventBus.removeListener(event, listener);
	}

	/**
	 * Subscribe to a server event (actions, state updates).
	 *
	 * To subscribe to a server event, we need to emit a 'subscribe' event to the server so it knows
	 * to broadcast the right events to us. This function automatically handles these 'subscribe' and
	 * 'unsubscribe' events so you can simply use this method to do it. When we disconnect from
	 * the server, this function also handles resubscribing to the events.
	 * It returns a function that can you can use to remove the event listener again and unsubscribe from the server.
	 *
	 * @param {string} serverEvent - This is the server event you want to subscribe to. Keep in mind these are not general socket events, but rather state / action Mission Control events.
	 * @param {function(data: object)} listener - The listener function that will be called on event.
	 * @return {function} Returns a function which you can use to remove the event listener.
	 *
	 * @since 1.0.0
	 * @example
	 * client.subscribe('action:EXAMPLE:DO', (data) => {})
	 * client.subscribe('update:stateObject', (data) => {});
	 */
	async service(
		name: string,
		listener?: IStateChangeListener
	): Promise<ISyncService> {
		// A subscribed service will fetch the state and then
		// receive updates when the state changes.
		// A static service does not subscribe to changes, so it will
		// only fetch the state once.
		if (listener) {
			return await this.makeSubscribedService(name, listener);
		} else {
			return await this.makeStaticService(name);
		}
	}

	protected async makeStaticService(name: string): Promise<ISyncService> {
		const _this = this;

		const { state } = (await this._socketEmit('state', {
			service: name,
		})) as { state: IState };

		return {
			async invoke(
				actionName: string,
				data: object
			): Promise<ISyncResponse> {
				return await _this.invoke(name, actionName, data);
			},
			state,
			unsubscribe: () => {},
		};
	}

	protected async makeSubscribedService(
		name: string,
		listener: IStateChangeListener
	): Promise<ISyncService> {
		await this.waitReady();

		let state: IState;

		const errorHandledListener = async (newState: IState) => {
			try {
				state = newState;

				await listener(newState);
			} catch (e) {
				this.logger.error('error in service state handler ' + name, e);

				this.reportError(e);
			}
		};
		this.eventBus.on(`sync:${name}`, errorHandledListener);

		if (name in this.services) {
			this.services[name].listeners++;
			state = this.services[name].state;
		} else {
			const { state: fetchedState } = (await this._socketEmit(
				'subscribe',
				{
					service: name,
				}
			)) as { state: IState };

			this.services[name] = {
				listeners: 1,
				state: fetchedState,
			};

			state = fetchedState;
		}

		// Getters (ready, state) don't allow arrow functions
		// so we have the good old JS 'this' problem again.
		const _this = this;

		return {
			async invoke(
				actionName: string,
				data: object
			): Promise<ISyncResponse> {
				return await _this.invoke(name, actionName, data);
			},
			get state(): IState {
				return state;
			},
			async unsubscribe() {
				_this.logger.debug('listener unsubscribed from service', name);

				_this.eventBus.removeListener(`sync:${name}`, listener);
				_this.services[name].listeners--;

				if (_this.services[name].listeners <= 0) {
					_this.logger.debug('removing service from sync', name);

					delete _this.services[name];

					await _this.waitReady();

					await _this._socketEmit('unsubscribe', {
						service: name,
					});
				}
			},
		};
	}

	/**
	 * Execute an action on the mission control server.
	 *
	 * This method sends an 'action' event, which the server will use to execute the action and modify
	 * the state accordingly.
	 *
	 * @param {string} action - The action that you want to execute.
	 * @param {object} data - The data you want to pass to the action function.
	 *
	 * @since 1.0.0
	 * @async
	 * @example
	 * client.action('EXAMPLE:DO', { parameter: 'example' })
	 * client.action('VIDEO-QUEUE:PUSH', { video: { url: '...', format: 'mp4' }})
	 */
	invoke(
		service: string,
		action: string,
		data: object
	): Promise<ISyncResponse> {
		return new Promise(async (resolve, reject) => {
			await this.waitReady();

			this.socket.emit(
				'action',
				{ service, action, data },
				(res: ISyncResponse) => {
					if (res.error) {
						reject(new Error(res.error.message));
					} else {
						resolve(res);
					}
				}
			);
		});
	}

	/**
	 * Report a general error to the user of the library
	 * @param {Error} error The error object
	 */
	reportError(error: unknown) {
		if (error instanceof Error)
			this.eventBus.emit('error', SyncErrorType.GENERAL, error);

		this.logger.error('error reported', error);
	}
}
