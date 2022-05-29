const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

const path = require('path');

const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

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
        // use: [
        //     'url-loader',
        //     'img-loader'
        // ]
        // use: [
        //     {
        //       loader: 'file-loader',
        //     //   options: {
        //     //     name: '[name].[ext]',
        //     //     outputPath: 'assets/'
        //     //   }
        //     }
        //   ]
        },
        {
            test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
        },
        {
            test:/\.html$/,
            use: [
              'html-loader'
            ]
          },
    ],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new miniCss({ filename: 'style.css'})],
};