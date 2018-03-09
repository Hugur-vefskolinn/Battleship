const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: true,
        keep_classnames: true,
      },
      extractComments: true,
    })
  ]
};