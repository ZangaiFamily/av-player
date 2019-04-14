const CleanWebpackPlugin = require("clean-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const routes = require('./router');

const plugins = [
  ...routes,
  new CleanWebpackPlugin(),
  new TSLintPlugin({
    files: ["./src/**/*.ts"],
  }),
  new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: ["You application is running here http://localhost:3000"],
      notes: ["Some additionnal notes to be displayed upon successful compilation"],
    },
    onErrors: function(severity, errors) {},
    clearConsole: true,
    additionalFormatters: [],
    additionalTransformers: [],
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[hash].scss",
    chunkFilename: "[id].css"
  })
];

module.exports = plugins;
