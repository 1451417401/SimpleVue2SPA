var path=require('path');
var webpack=require('webpack');
var autoprefixer=require('autoprefixer');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var _=require('lodash');


module.exports={
	entry: {
		main: [
            './src/app.js',
            'webpack-dev-server/client?http://localhost:8899',
            'webpack/hot/only-dev-server'
        ],
	},
	output:{
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
    	filename: "bundle.js"
	},
	resolve: {
		extensions: ['','.js','.vue','.scss','.css'],
		alias: {
      		'src': path.resolve(__dirname, './src')
      	}
	},
	resolveLoader: {
    	root: path.join(__dirname, 'node_modules')
  	},
  	module: {
  		loaders: [
  			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('vue-style', 'css!postcss')
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('vue-style', 'css!postcss!sass')
			},
      		{
        		test: /\.vue$/,
        		loader: 'vue'
      		},
      		{
        		test: /\.js$/,
        		loader: 'babel',
        		exclude: /node_modules/
      		},
      		{
        		test: /\.json$/,
        		loader: 'json'
      		},
      		{
        		test: /\.(png|jpg|gif)$/,
        		loader: 'file',
        		query: {
          			name: 'img/[name].[hash:7].[ext]'
        		}
      		},
			{
				test: /\.(woff|ttf|eot|svg)/,
				loader: 'file',
				query: {
					name: 'fonts/[name].[hash:7].[ext]'
				}
			}
  		]
  	},
  	vue: {
		loaders: {
			css: ExtractTextPlugin.extract('css!postcss'),
			sass: ExtractTextPlugin.extract('css!postcss!sass')
		}
	},
	postcss: [
		autoprefixer({
			browsers: ['last 2 versions']
		})
	],
	plugins:[
		new HtmlWebpackPlugin({
	     	template: './src/index.html'
	    })
	]
};