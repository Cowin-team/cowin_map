const path = require('path');
const webpack = require('webpack');
const glob = require('glob')

module.exports = {
  entry: function() {
    let entries = glob.sync('./assets/js/src/entry/*').reduce((entries, entry) => {
      const entryName = path.parse(entry).name
      entries[entryName] = entry

      return entries
    }, {});
    return entries;
  },
  output: {
    path: path.resolve(__dirname, "./assets/js/dist/"),
    chunkLoading: false,
    wasmLoading: false,
    clean: true
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
