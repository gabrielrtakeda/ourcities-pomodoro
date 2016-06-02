var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./app/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: [/node_modules/], loader: 'babel' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
