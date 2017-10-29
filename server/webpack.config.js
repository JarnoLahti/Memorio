var webpack = require("webpack");
var path = require("path");

const fs = require('fs');

// https://stackoverflow.com/questions/43948171/building-a-react-app-with-socket-io-and-webpack-doesnt-work
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    target: 'node',
    entry: {
        app: ["./server.ts"]
    },
    output:{
        path:path.resolve(__dirname, "./dist"),
        filename:"server.js"
    },
    resolve: {
        extensions:[".ts", ".js", ".json"]
    },
    module:{
        loaders:[
            { test: /\.ts/, exclude:['./node_modules/'], loader:'ts-loader' },
            { test: /\.node$/, loader: 'node-loader'}
        ]
    },
    externals: nodeModules
};