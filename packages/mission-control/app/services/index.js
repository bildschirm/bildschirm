/**
 * ### The Services
 * Services in Mission Control enable most of the functionality. They are modular but still integrated into the platform.
 *
 * @todo Make services a little more dynamic.
 * @since 1.0.0
 * @module @services
 */
const iftttService = require('./ifttt');
// const kodiService = require('./kodi');
const notificationsService = require('./notifications');
const spotifyService = require('./spotify');
const systemInfoService = require('./system-info');

let services = {};

module.exports = {
	/**
	 * Get all registered services.
	 * @return {Object.<string, Object>} The services.
	 */
	getServices: () => services,

	/**
	 * Start the services last and populate the services object.
	 *
	 * Don't call this method manually!
	 *
	 * @protected
	 */
	startServices() {
		services = {
			ifttt: iftttService(),
			// kodi: kodiService(),
			notifications: notificationsService(),
			spotify: spotifyService(),
			systemInfo: systemInfoService()
		};
	}
};
