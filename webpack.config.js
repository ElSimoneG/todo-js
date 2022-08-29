const HtmlWebpack    = require ('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    //LIMIPIA LA CARPETA DIST Y VUELVE A CREAT LOR ARCHIVOS
    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,        //BUSCA TODOS LOS ARCHIVOS HTML
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /style.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'App test Webpack',
            template: './src/index.html',
        }),

        new MiniCssExtract({
            filename: 'style.css',
            ignoreOrder: false,
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: ' assets/ ' }
            ]
        })
    ],
}