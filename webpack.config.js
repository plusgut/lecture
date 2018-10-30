var CopyWebpackPlugin = require('copy-webpack-plugin');
var JasmineWebpackPlugin = require('jasmine-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: []
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: `${__dirname}/api`,
      to: 'api'
    }]),
    new JasmineWebpackPlugin({
      filename: 'index.html'
    })
  ]
}