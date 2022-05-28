const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'none',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
        {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        use: [
            'url-loader',
            'img-loader'
        ]
        },
        {
            test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
        },
    ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new miniCss({ filename: 'style.css'})],
};