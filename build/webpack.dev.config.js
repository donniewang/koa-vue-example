/**
 * Created by donnie on 16/2/26.
 */

var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./webpack.base.config');

config.devtool = 'inline-source-map';//'eval-source-map';

config.entry = {
    index:['./app/client/index.js','webpack-dev-server/client?http://0.0.0.0:3001','webpack/hot/only-dev-server']
};

config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: './app/client/templates/index.html'
    }),
    //new webpack.optimize.CommonsChunkPlugin("scripts/common.js"),
    new CopyWebpackPlugin([
        { from: './app/client/images', to: 'images' }
    ]),
    new ExtractTextPlugin('styles/styles.css', {
        publicPath: '/',
        allChunks: true
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"'
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
]);

config.devServer = {
    contentBase:'./public',
    port:3001,
    proxy: {
        '*' : 'http://127.0.0.1:3000'
    },
    hot: true,
    inline: true,
    historyApiFallback: true,
    colors: true,
    stats: 'normal',
    outputPath:'./public'
};

module.exports = config;
