const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = [
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: path.resolve(__dirname, "../index.html"),
  }),
  new HtmlWebpackPlugin({
    filename: "canvas.html",
    template: path.resolve(__dirname, "../src/components/canvas/canvas.html"),
  }),
]