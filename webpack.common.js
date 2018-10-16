const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        main: './src/main.ts'
    },

    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },

    devServer: {
        contentBase: './build',
    },

    resolve: {
        extensions: ['.ts', '.js','scss'],
    },

    module:{
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]    
    },

    plugins: [
        new HtmlWebpackPlugin({
          input: path.resolve('./src/index.html'),
          output: 'index.html',
          minify: false,
          entrypoints: [
            'main'
          ]
        })
    ]


        
      
}