var path=require('path');
var webpack=require('webpack');
var config=require('./webpack.base.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

config.devtool="#source-map";

config.plugins = (config.plugins||[]).concat([
	new webpack.NoErrorsPlugin(),
	new ExtractTextPlugin('css/[name].css')
]);

module.exports=config;