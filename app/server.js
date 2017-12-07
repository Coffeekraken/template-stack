const __express = require('express');
const __path = require('path');
const __fs = require('fs');
const __cors = require('cors');
const __bodyParser = require('body-parser');
const __merge = require('lodash/merge');
const __exec = require('child_process').spawnSync;
const _find = require('lodash/find');

module.exports = function(config) {

	var app = __express();

	app.get('/template-stack.js', function (req, res) {

		// try to load the pages.json file
		let pagesJson = {};
		if (__fs.existsSync('pages.json')) {
			pagesJson = require(__path.resolve('pages.json'));
		}

		const templateStackOptions = Object.assign({}, config, {
			pages : pagesJson
		});

		// get the templateStack app js file content
		let templateStackAppJs = '';
		const templateStackAppJsFilePath = require.resolve('../dist/js/app.js');
		if (__fs.existsSync(templateStackAppJsFilePath)) {
			templateStackAppJs = __fs.readFileSync(templateStackAppJsFilePath, 'utf8');
		}

		let script = `
			${templateStackAppJs}
			document.addEventListener('DOMContentLoaded', function(e) {
				new STemplateStack(${JSON.stringify(templateStackOptions)});
			});
		`;

		return res.send(script);
	});

	app.listen(config.port);

}
