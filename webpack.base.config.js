const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist')
};
module.exports = {

    externals: {
        paths: PATHS
    },
    entry: {
        index: PATHS.src
    },
    output: {
        filename: `js/[name].js`,
        path: PATHS.dist,
        //publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'postcss.config.js' } }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'postcss.config.js' } }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                //loader: 'url-loader'
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts'
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: `css/[name].css`
        }),
        new CopyWebpackPlugin([
            {
                from: `${PATHS.src}/img`,
                to: `${PATHS.dist}/img`
            }
        ]),
        new CleanWebpackPlugin()
    ]
};