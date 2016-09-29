var webpack=require('webpack');
var config=require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DefinePlugin = new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: '"prod"'
	}
});

var host = 'http://localhost:88099';
config.output.publicPath = host + config.output.publicPath;
//config.output.path="/assets/"

//minify with dead-code elimination
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false
	}
});

config.output.filename = 'js/[name].[chunkhash].js';

config.plugins = (config.plugins||[]).concat([
	DefinePlugin,
	UglifyJsPlugin,
	new ExtractTextPlugin('css/[name].[contenthash].css')
]);

module.exports=config;