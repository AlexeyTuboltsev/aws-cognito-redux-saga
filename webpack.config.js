const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const webpack = require('webpack')

const config = {
    context: path.resolve(__dirname, './src'),
    devtool: 'cheap-module-source-map',
    entry: ['./index.js'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
        library: 'aws-cognito-redux-saga',
        libraryTarget: 'umd'
    },
    externals: [
        'react',
        'redux-saga/effects',
        'amazon-cognito-identity-js',
        'aws-sdk',
        'aws-cognito-promises',
        'babel-polyfill'
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['stage-0'],
                    plugins: ['transform-react-jsx']
                }
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            "process.env": { NODE_ENV: "'production'" }
        }),
        new ClosureCompilerPlugin({
            compiler: {
                language_in: 'ECMASCRIPT6',
                language_out: 'ECMASCRIPT5',
                compilation_level: 'SIMPLE'
            },
            concurrency: 3,
        })
    ]
}

module.exports = config
