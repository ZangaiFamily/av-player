const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const TSLintPlugin = require("tslint-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const plugins = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: path.resolve(__dirname, "../index.html"),
  }),
  new HtmlWebpackPlugin({
    filename: "about.html",
    template: path.resolve(__dirname, "../about.html"),
  }),
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
