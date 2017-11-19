const webpack           = require('webpack');
const merge             = require('webpack-merge');
const common            = require('./webpack.common');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin')

const ENV               = process.env.NODE_ENV = 'production'

module.exports = merge(common,{
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(ENV)
            }
        })
    ]
})