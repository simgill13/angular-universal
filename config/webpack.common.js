const path                       = require('path');
const HtmlWebpackPlugin          = require('html-webpack-plugin');
var ExtractTextPlugin            = require('extract-text-webpack-plugin');
const {ContextReplacementPlugin} = require('webpack');
let helpers                      = require('./helpers');


module.exports = {
    entry: {
        main: './src/main.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        path: helpers.root('./.build'),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: ['.js', '.ts', '.html']
    },
    devtool: 'source-map',
    watch:true,
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
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'css'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'css'),
                loader: 'raw-loader'
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


