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
        use: [
            'url-loader?limit=10000',
            'img-loader'
        ]
        },
        {
            // test: /\.s[ac]ss$/i,
            // use: [
            // // Creates `style` nodes from JS strings
            // "style-loader",
            // // Translates CSS into CommonJS
            // "css-loader",
            // // Compiles Sass to CSS
            // "sass-loader",
            // ],
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