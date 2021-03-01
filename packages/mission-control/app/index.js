#! /usr/bin/env node
/*
 * Mission Control
 *
 * This file starts the server.
 * Everything is setup in here.
 * Modules that start with @ can be required by any other module as they're
 * self-contained without side-effects.
 */

require('module-alias/register');
const config = require('@config');
const argv = require('@helpers/argv');
const logging = require('@helpers/logger');

const startSSOProcess = require('@helpers/sso-process');

module.exports = async function start() {
	logging.logConfig(config);
	logging.progress(startMissionControl);
};

async function startMissionControl(updateProgressBar) {
	const logger = logging.createLogger('Main', 'cyan');
	const eventLogger = logging.createLogger('Event', 'green');

	logger.info(`Starting Mission Control...`);
	updateProgressBar('Starting', 0.01);

	const database = require('@database'); // eslint-disable-line no-unused-vars

	// We spawn a node subprocess.
	// This subprocess is the auth server.
	// We do this, so the user doesn't have to do so manually,
	// and the mission-control binary is self-contained to run everything needed.
	if (argv.sso) {
		updateProgressBar('Start SSO', 0.10);
		const ssoProcess = startSSOProcess(config.auth.url, config.auth.port);

		process.on('SIGINT', () => {
			ssoProcess.kill();
			process.exit();
		});
	} else {
		logger.info('Skipping internal SSO server process');
	}

	// Start the state machine
	updateProgressBar('Boot State Machine', 0.10);
	const state = require('@state');

	const initHttp = require('./http');
	const socket = require('./socket');

	updateProgressBar('Boot HTTP Server', 0.20);
	// Initialize the main mission control http server
	const http = initHttp();

	updateProgressBar('Boot Socket Server', 0.30);
	// Initialize the socket server
	const io = socket(http.server); // eslint-disable-line no-unused-vars

	updateProgressBar('Init Plugins', 0.75);
	const plugins = require('./plugins');
	await plugins.initPlugins({
		http,
		state,
		database,
		config
	}, updateProgressBar);

	updateProgressBar('HTTP Listen', 0.95);
	http.server.listen(config.http.port, () => {
		logging.http(`Server listening on port`, config.http.port);
		logging.logReadyMessage(config.http.url, config.auth.url);
	});

	if (config.debug) {
		state.subscribe('*', (event, data) =>
			eventLogger.debug(event, data.actionData || data)
		);
	}
};


// setTimeout(
// 	() =>
// 		state.callAction('VIDEO-QUEUE:PUSH', {
// 			video: {
// 				url: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
// 				format: 'm4a'
// 			}
// 		}),
// 	2000
// );
