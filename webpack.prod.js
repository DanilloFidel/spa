const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    entry: {
        main: './src/main.ts'
    },

    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },

    plugins: [
        new CopyWebpackPlugin([ 
        { 
            from: 'src/assets', 
            to: 'assets'
        }
          ])
      ]
    
});