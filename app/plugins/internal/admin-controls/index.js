const restart = require('@helpers/restart');

/**
 * Notification type
 *
 * @typedef {Notification}
 * @property {string} type - Type of notification
 * @property {string} title - Notification title
 * @property {string} [body] - Notification body text
 */

module.exports = function adminControls({
	dashboard,
	sync,
	auth,
	permissions,
	logger,
	database,
	helpers,
}) {

	permissions
		.grant('admin')
		.readAny('admin-controls')
		.updateAny('admin-controls');

	const service = sync
		.createService('admin-controls', {
			startedAt: new Date(),
			restarting: false,
		})
		.addFilter((state, { user, permissions }) => {
			return permissions.can(user.role).read('admin-controls', 'any').granted
				? state
				: { restarting: false };
		});

	service
		.action('restart')
		.requirePermission('update', 'admin-controls', 'any')
		.handler(async (data, { state }) => {
			logger.info('preparing restart...');

			setTimeout(async () => {
				logger.info('restarting...');
				await restart();
			}, 2000);

			state.restarting = true;

			return {
				restartIn: 2000,
				restarting: true,
			};
		});

	dashboard.component('admin-controls').custom(__dirname + '/widget.html');
	dashboard.page('page-admin', { title: 'Admin Page', menu: 10 }).custom(__dirname + '/page.html');

	return {
		internal: true,
		version: '0.0.1',
		description: 'Bildschirm lifecycle controls',
	};
};
