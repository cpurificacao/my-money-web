const webpack = require("webpack");

const miniCssExtractPlugin = require("mini-css-extract-plugin"),
  htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/public`,
    filename: "[name].[hash].bundle.js",
  },
  devServer: {
    port: 3000,
    contentBase: "./public",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      modules: `${__dirname}/node_modules`,
      jquery: "modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js",
      bootstrap: "modules/admin-lte/bootstrap/js/bootstrap.min.js",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new miniCssExtractPlugin({
      filename: "[name].[hash].bundle.css",
    }),
    new htmlWebpackPlugin({
      template: `${__dirname}/public/index.html`,
      minify: {
        maxLineLength: 80,
      },
      cache: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff2?|[ot]tf|eot|(sv|pn|jpe?)g)$/,
        loader: "file-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
};
