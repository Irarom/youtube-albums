'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

	entry: {
		app: './src/app/app.js'
	},

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist')
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ng-annotate-loader'
					},
					{
						loader: 'babel-loader'
					}

				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'raw-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
				]
			}
		]
	},

	plugins: [
		new ExtractTextWebpackPlugin('app.styles.css'),
		new CopyWebpackPlugin([
			{
				from: './src/assets',
				to: './assets'
			}
		]),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: (module, count) => {
				let appDir = path.resolve(__dirname, './src');
				return module.resource && module.resource.indexOf(appDir) === -1;
			}
		})
	]

};
