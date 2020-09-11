const path = require('path')

let postCSSPlugins = [
  require("postcss-mixins"),
  require("postcss-nested"),
  require("postcss-import"),
  require("autoprefixer")
]

module.exports = {
  entry: "./app/assets/scripts/main.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  mode: "development",
  devServer: {
    before: function(app, server) {
      server._watch("./app/**/*.html")
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: "0.0.0.0"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}]
      }
    ]
  }
}