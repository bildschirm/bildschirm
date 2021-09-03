export interface Logger {
	debug: (...args: any[]) => void;
	warn: (...args: any[]) => void;
	error: (...args: any[]) => void;
}

export interface SyncError {
	message: string;
}

export interface SyncResponse {
	error?: SyncError;
	[key: string]: any;
}

export type EventListener = (...args: any[]) => void;

export type StateListener = (state: object) => void;

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
export enum SocketError {
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
export enum DisconnectReason {
	UNKNOWN = 'UNKNOWN',
	SERVER_DISCONNECT = 'SERVER_DISCONNECT',
	CLIENT_DISCONNECT = 'CLIENT_DISCONNECT',
	PING_TIMEOUT = 'PING_TIMEOUT',
}

export const DISCONNECT_REASON = {
	UNKNOWN: 'UNKNOWN',
	SERVER_DISCONNECT: 'SERVER_DISCONNECT',
	CLIENT_DISCONNECT: 'CLIENT_DISCONNECT',
	PING_TIMEOUT: 'PING_TIMEOUT',
};

export const SOCKET_ERROR = {
	GENERAL: 'GENERAL',
	TIMEOUT: 'TIMEOUT',
	NO_ATTEMPTS_LEFT: 'NO_ATTEMPTS_LEFT',
	AUTH_FAILED: 'AUTH_FAILED',
	AUTH_TIMEOUT: 'AUTH_TIMEOUT',
};
