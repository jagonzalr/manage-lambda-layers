'use strict'

const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const slsw = require('serverless-webpack')
const webpack = require('webpack')

module.exports = {
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [new ESLintPlugin()],
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  }
}