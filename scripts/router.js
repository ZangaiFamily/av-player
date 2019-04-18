const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const map = [
  {
    path: 'index.html',
    resolve: path.resolve(__dirname, "../index.html"),
  },
  {
    path: 'canvas.html',
    resolve: path.resolve(__dirname, "../src/components/canvas/canvas.html")
  },
  {
    path: 'camera.html',
    resolve: path.resolve(__dirname, "../src/components/capture-camera/capture-camera.html")
  }
];

module.exports = map.map(({path, resolve}) => 
  new HtmlWebpackPlugin({
    filename: path,
    template: resolve
  })
);
// module.exports = [
//   new HtmlWebpackPlugin({
//     filename: "index.html",
//     template: path.resolve(__dirname, "../index.html"),
//   }),
//   new HtmlWebpackPlugin({
//     filename: "canvas.html",
//     template: path.resolve(__dirname, "../src/components/canvas/canvas.html"),
//   }),
//   new HtmlWebpackPlugin({
//     filename: "camera.html",
//     template: path.resolve(__dirname, "../src/components/capture-camera/capture-camera.html"),
//   }),
// ]