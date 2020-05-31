const packageName = require('./package.json').name;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue?$/,
        use: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [ MiniCssExtractPlugin.loader,"css-loader","sass-loader" ]
      }
    ],
  },
  resolve:{
    extensions: [".ts", ".js",".vue"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:"styles.css"
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Blogs'
    }),
  ],
  output: {
    filename: 'bundle.js',
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_${packageName}`,
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 1234,
    hot: true,
  }
};
