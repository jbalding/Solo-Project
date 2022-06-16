const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin= require('html-webpack-plugin');


module.exports = {
    entry: '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    mode: 'development'
}