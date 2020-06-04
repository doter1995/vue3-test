const packageName = require('./package.json').name;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
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
        use: [ "style-loader","css-loader","sass-loader" ]
      }
    ],
  },
  resolve:{
    extensions: [".ts", ".js",".vue"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Blogs'
    }),
  ],
  target:'web',
  output: {
    filename: 'bundle.js',
    library: packageName,
    libraryTarget: 'umd',
  },
  devServer: {
    publicPath: `/${packageName}/`,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 1234,
    hot: true,
  }
};
