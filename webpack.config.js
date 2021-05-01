const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    homepage: "./assets/js/src/homepage.js"
  },
  output: {
    path: path.resolve(__dirname, "./assets/js/"),
    chunkLoading: false,
    wasmLoading: false
  },
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
};
