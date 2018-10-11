const resolve = require('path');

module.exports = {

    entry: {
        main: './src/main.ts'
    },

    output: {
        path: resolve('./dist'),
        filename: '[name].js'
    }
}