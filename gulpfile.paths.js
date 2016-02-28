'use strict';

let baseLibs = [
	'node_modules/systemjs/dist/system.js',
	'node_modules/es6-shim/es6-shim.js',
	'node_modules/rxjs/bundles/Rx.js',
	'node_modules/angular2/bundles/angular2-polyfills.js',
	'node_modules/angular2/bundles/angular2.dev.js',
	'node_modules/angular2/bundles/router.dev.js',
	'node_modules/angular2/bundles/http.dev.js',
	'node_modules/lodash/index.js',
	'node_modules/js-md5/src/md5.js',
	'node_modules/jwt-decode/build/jwt-decode.js'
	// 'node_modules/ng2-table/components/table/table.js',
	// 'node_modules/ng2-table/components/table/sorting.js',
	// 'node_modules/ng2-table/components/table/filtering.js',
	// 'node_modules/ng2-table/components/table/paging.js',
	// 'node_modules/ng2-table/components/table/table-config.js'
];

module.exports = {
	dev: {
		libs: {
			js: [
				...baseLibs
				// Add dev only libs here - eg 'node_modules/debug-lib/index.js'
			]
		}
	},

	prod: {
		libs: {
			js: [
				...baseLibs
				// Add prod only libs here - eg 'node_modules/analytics-lib/index.js'
			]
		}
	}
};
