const mix = require('laravel-mix');

const outputFolder =
	process.env.NODE_ENV === 'production'
		? 'dist/production'
		: 'dist/development';

mix.ts('src/index.ts', 'dist').options({
	legacyNodePolyfills: true,
});
// .webpackConfig({
// 	resolve: {
// 		alias: {
// 			'@': path.resolve(__dirname, 'app/js'),
// 			'@components': path.resolve(__dirname, 'app/js/components'),
// 			'@socket': path.resolve(__dirname, 'app/js/socket'),
// 			'@vue': path.resolve(__dirname, 'app/js/vue'),
// 			'@pages': path.resolve(__dirname, 'app/js/pages'),
// 			'@helpers': path.resolve(__dirname, 'app/js/helpers'),
// 			'@config': path.resolve(__dirname, 'app/js/config'),
// 			'@api': path.resolve(__dirname, 'app/js/api')
// 		},
// 		fallback: {
// 			buffer: require.resolve('buffer'),
// 			process: require.resolve('process/browser')
// 		}
// 	}
// });
