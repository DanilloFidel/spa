const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    entry: {
        main: './src/main.ts'
    },

    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    }

});