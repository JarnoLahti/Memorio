var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ["./app.tsx"]
    },
    output:{
        path:path.resolve(__dirname, "../server/dist/wwwroot"),
        filename:"bundle.js"
    },
    resolve: {
        extensions:[".ts", ".tsx", ".js", ".json"]
    },
    module:{
        loaders:[
            { test: /\.tsx?/, exclude:['./node_modules/'], loader:'ts-loader' },
            { test: /\.css?/, exclude:['./node_modules/'], loader: extractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            API_URL:'"http://localhost:5000/api/"'
        }),
        new htmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        }),
        new extractTextPlugin({
            filename:'bundle.css'
        })
    ]
};