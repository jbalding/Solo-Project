const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    // mode: development or production
    mode: 'development',
    //entry: tells webpack where our top most level of front is so that we can start compiling
    entry: [
        './client/index.js'
    ],
  
    //output tells webpack where to output our compiled files
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', ['@babel/preset-react', {"runtime": "automatic"}]]
                }
            },
            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        historyApiFallback: true,
        static: {
            publicPath: '/',
            directory: path.resolve(__dirname, 'build')
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000',
                secure: false,
            },
            '/assest/**': {
                target: 'http://localhost:3000/',
                secure: false,
            }
        }
    }
}