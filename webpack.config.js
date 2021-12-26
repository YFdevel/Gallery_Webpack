const {resolve} = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


exports.default = {
    entry: "./js/index.js",
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.[contenthash].js"
    },
    devServer: {
        watchFiles: resolve(__dirname, './'),
        port: 9000,
        static: './build',
        liveReload: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'image-webpack-loader',
                enforce: 'pre'
            },
            // {
            //     test: /\.(png|jpg|webp|gif|svg)$/i,
            //     use: [
            //         {
            //             loader: 'img-optimize-loader',
            //             options: {
            //                 compress: {
            //                     mode: 'high',
            //                 }
            //             }
            //         },
            //     ],
            // },
            // {
            //     test: /\.(png|jpg|webp|gif|svg)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit:18192
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(png|jpg|webp|gif|svg|mp3|mp4)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']

            },
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader']
            // },
           ]
    },
    plugins: [
        new HtmlWebPackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })

    ]
}
