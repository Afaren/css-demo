"use strict";
// const path = requre('path');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'index.bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  }
};