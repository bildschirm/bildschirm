const proxy = require('http-proxy-middleware');

module.exports = function youtubeRoutes(app, requireAuth) {
	app.use(
		'/youtube-downloader',
		requireAuth(),
		proxy(
			'/', 
			{
				target: 'http://localhost:3003', 
				logLevel: 'debug', 
				prependPath: false, 
				ignorePath: true,
				ws: true
			}
		)
	);
};
