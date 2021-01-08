const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeWebExternals = require("webpack-node-externals");
// const NodemonPlugin = require('nodemon-webpack-plugin');
 
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: '@sucrase/webpack-loader',
          options: {
            transforms: ['jsx']
          }
        }
      }
    ]
  },
  externals: [nodeWebExternals()],
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin(
      'require("source-map-support").install();',
      { raw: true, entryOnly: false }),
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    // new NodemonPlugin()
  ],
  devtool: 'source-map'
}