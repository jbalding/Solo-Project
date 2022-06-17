const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    // mode: development or production
    mode: 'development',
    //entry: tells webpack where our top most level of front is so that we can start compiling
    entry: path.resolve(__dirname,'client/index.js'),
  
    //output tells webpack where to output our compiled files
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /|.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Development',
    //         template: 'index.html'
    //     })
    // ],

    // devServer: {
    //     static: {
    //         publicPath: '/build',
    //         directory: path.resolve(__dirname, 'build')
    //     },
    //     proxy: {
    //         '/api': 'http://localhost:3000'
    //     }
    // }
}