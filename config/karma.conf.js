const webpackConfig = require('./webpack.test');
const singleRun = process.env.CIRCLECI || false;

module.exports = function (config) {
	const _config = {
		basePath: '',

		frameworks: ['jasmine'],

		files: [
			{ pattern: './config/karma-test-shim.js', watched: false }
		],

		preprocessors: {
			'./config/karma-test-shim.js': ['webpack', 'sourcemap']
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			stats: 'errors-only'
		},

		webpackServer: {
			noInfo: true
		},

		reporters: ['kjhtml', 'progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: singleRun
	};

	config.set(_config);
};
