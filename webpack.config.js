var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var environment = process.env.NODE_ENV || 'development';
var development = environment === 'development'

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname),
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    }),
    new ExtractTextPlugin('main.css')
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 version') },
      { test: /\.(png|jpg|jpeg|gif|svg)/, loader: 'file-loader?name=[path][name].[ext]' },
    ],
  },
};
