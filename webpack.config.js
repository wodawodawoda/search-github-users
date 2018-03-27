const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPLugin = require('optimize-js-plugin');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const plugins = [
	new HtmlWebpackPlugin({
		template: 'src/index.html',
		filename: 'index.html',
		inject: 'body'
	}),
	new ExtractTextPlugin({
		filename: 'style.css',
		disable: true // disabled for HMR
	}),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin() // Remember to not include HMR plugin both in .config and npm cli
];

console.log('NODE_ENV:', env);

if (env === 'production') {
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPLugin({
		sourceMap: false
	})
  );
}

//webpack.config.js
module.exports = {
    entry: [
		'react-hot-loader/patch',
		'./src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
    	rules: [
			{
				test: /\.sass$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
	    	{
	    		test: /\.js$/,
	    		exclude: /node_modules/,
	    		loader: "babel-loader"
	    	}
    	] 
    },
    plugins
};