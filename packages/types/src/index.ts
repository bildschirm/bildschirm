export type IState = object;

export type IStateChangeListener = (state: object) => void;

export interface ISyncError {
	message: string;
}

export interface ISyncResponse {
	error?: Error;
	[key: string]: any;
}

export interface ISyncService {
	state: IState;

	invoke(action: string, data: object): Promise<ISyncResponse>;

	unsubscribe: () => void;
}

export interface ISyncClient {
	service(
		name: string,
		onStateChanged?: IStateChangeListener
	): Promise<ISyncService>;

	invoke(
		service: string,
		action: string,
		data: object
	): Promise<ISyncResponse>;

	on(event: string, callback: (...args: any[]) => void): () => void;
}

/**
 * The error types that cause the {@link SocketEvents} 'error' event to fire.
 *
 * `GENERAL` A general socket error.
 * `TIMEOUT` The ping to the server timed out.
 * `NO_ATTEMPTS_LEFT` The client ran out of attempts to reconnect to the server.
 * `AUTH_FAILED` The client is not granted access to the server due to the token being invalid.
 * `AUTH_TIMEOUT` The client is not granted access to the server because the client took too long to authenticate.
 *
 * @since 0.0.1
 */
export enum SyncErrorType {
	GENERAL = 'GENERAL',
	TIMEOUT = 'TIMEOUT',
	NO_ATTEMPTS_LEFT = 'NO_ATTEMPTS_LEFT',
	AUTH_FAILED = 'AUTH_FAILED',
	AUTH_TIMEOUT = 'AUTH_TIMEOUT',
}

/**
 * The disconnect reason that gets passed along with the {@link SocketEvents} 'disconnect' event.
 *
 * `UNKNOWN` An unknown disconnect reason.
 * `SERVER_DISCONNECT` The server disconnected the client. A manual reconnect would be required.
 * `CLIENT_DISCONNECT` The client disconnected from the server. A manual reconnect would be required.
 * `PING_TIMEOUT` The ping to the server timed-out. The client will automatically try to reconnect.
 *
 * @since 0.0.1
 */
export enum SyncDisconnectReason {
	UNKNOWN = 'UNKNOWN',
	SERVER_DISCONNECT = 'SERVER_DISCONNECT',
	CLIENT_DISCONNECT = 'CLIENT_DISCONNECT',
	PING_TIMEOUT = 'PING_TIMEOUT',
}
