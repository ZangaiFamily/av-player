const path = require("path");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  devtool: "inline-source-map",
  module: loaders,
  plugins,
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    hot: true,
    contentBase: path.join(__dirname, "../src"),
    compress: true,
    progress: true,
    open: true
  },
};
