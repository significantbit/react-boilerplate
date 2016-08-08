/* eslint-env node */

var path = require("path");
module.exports = {
  entry: "./app/app.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.styl$/,
        loaders: ["style", "css", "stylus"]
      },
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
