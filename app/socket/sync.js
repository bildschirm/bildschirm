/**
 * Handle socket connections for sync
 * @param  {SocketIO~Socket} socket   - The socket
 * @param  {SocketContext}   context  - Helpers
 */
module.exports = function handleSync(socket, { on, sync, logger }) {
	let subscriptions = {};

	// On connection, we emit a initial-state event.
	// The client can use this to populate its state.
	// client.emit('initial-state', {
	// 	state: sync.state
	// });

	// The client can call actions by emitting the action event.
	// It has to pass the action and associated data.
	on('action', async ({ service, action, data }) => {
		logger.debug(`action request - service: ${service}, action: ${action}`);

		try {
			return await sync.invokeAction(service, action, data, socket.user);
		} catch (e) {
			if (!e.isUserError) {
				logger.error(`error invoking action`, {
					service,
					action,
					error: e
				});
			}

			// Pass error to request error handler
			throw e;
		}
	});

	// client.on('subscribe', () => console.error('WE HAVE A WINNER'));

	// The client can emit a 'subscribe' event to subscribe to the state machines events.
	// These will then get relayed to the socket client.
	on('subscribe', async ({ service: serviceName }) => {
		logger.debug(`client subscribed: ${serviceName}`);

		if (serviceName in subscriptions) 
			return {
				subscriptions: Object.keys(subscriptions)
			};

		const relayStateUpdates = async (state) => {
			try {
				const filteredState = subscriptions[serviceName].filter(state, socket.user);

				socket.emit(`sync`, {
					service: serviceName,
					state
				});
			} catch (e) {
				logger.error('error relaying state', { error: e });
			}
		};

		const service = sync.service(serviceName);
		subscriptions[serviceName] = {
			unsubscribe: service.subscribe(relayStateUpdates),
			filter: service.filter
		};

		// Send initial state
		logger.debug('sending initial state', { state: service.state });
		relayStateUpdates(service.state);

		return {
			subscriptions: Object.keys(subscriptions)
		};
	});

	// When the client wants to unsubscribe remove the event
	on('unsubscribe', ({ service }) => {
		if (!(service in subscriptions)) {
			return {
				status: 202
			};
		}

		logger.debug(`Unsubscribing client from service ${service}.`);

		subscriptions[service].unsubscribe();
		delete subscriptions[service];

		return {
			unsubscribed: true
		};
	});

	// When the client disconnects unsubscribe all subscriptions
	socket.on('disconnect', () => {
		logger.debug('A client disconnected.');

		Object.values(subscriptions).forEach(({ unsubscribe }) => unsubscribe());
		subscriptions = null;
	});
};