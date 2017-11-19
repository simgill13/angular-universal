const webpack           = require('webpack');
const merge             = require('webpack-merge');
const common            = require('./webpack.common');
process.env.NODE.ENV    = "development";

module.exports = merge(common,{
    devtool:'inline-source-map',
    devServer:{
        port:8080
    }
})