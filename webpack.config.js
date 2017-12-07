const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		'dist/js/app.js' : './src/js/app.js'
	},
	output: {
		library: "TemplateStack",
		libraryTarget: "umd",
		filename: '[name]'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(bower_components|node_modules)/,
			use: 'babel-loader'
		}, {
			test: /\.css$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options: {
					root: '../../'
				}
			}]
		}, {
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: [{
				loader: 'url-loader',
				options: {}
			}]
		}]
	},
	plugins: [
		new webpack.IgnorePlugin(/vertx/)
	],
	resolve : {
		alias : {
			'coffeekraken-sugar' : '/Users/olivierbossel/data/web/coffeekraken/sugar/dist'
		}
	}
}
