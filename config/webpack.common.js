const path                       = require('path');
const HtmlWebpackPlugin          = require('html-webpack-plugin');
const {ContextReplacementPlugin} = require('webpack');
let helpers                      = require('./helpers');


module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: {
        path: helpers.root('./.build'),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: ['.js', '.ts', '.html']
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 9000
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { 
                test: /.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /.html$/,
                use: 'raw-loader' 
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ],
       
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            showErrors: true,
            title: "Webpack App",
            path: path.join(__dirname, "../dist/"),
            hash: true
        }),
        new ContextReplacementPlugin( /(.+)?angular(\\|\/)core(.+)?/, helpers.root('./src'), {} ),
         
       
    ]
    
}


