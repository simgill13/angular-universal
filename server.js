const express               = require('express');
const webpack               = require('webpack');
const webpackDevMiddleware  = require('webpack-dev-middleware');
const app                   = express();
const config                = require('./webpack.config');
const complier              = webpack(config);


app.use(webpackDevMiddleware(complier,{
    publicPath: config.output.publicPath
}));


app.listen(8080,()=>{
    console.log('server listning on port 8080')
})