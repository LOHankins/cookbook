var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/app/index.html",
	filename: "index.html",
	inject: 'body'
});

module.exports = {
	// what file to feed into webpack
	entry: [
		"./app/index.js"
	],
	//  our output file from webpack
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	// transformations to apply to our code
	module: {
		loaders: [
			{
				test: /\.js$/, // target any file ending in js
				exclude: /node_modules/, // except for node_modules
				loader: 'babel-loader' // apply the babel loader

			}
		]
	},
	plugins: [
		HtmlWebpackPluginConfig
	]
};