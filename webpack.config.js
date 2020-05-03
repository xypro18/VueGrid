const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/main'
    },
    output: {
        filename: "vue.js",
        path: path.resolve(__dirname, './dist'),
        publicPath: '/sourcingvue/resources/dist/',
        chunkFilename: "[id].[name].[chunkhash].js"
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    //   },
    module: {
        rules: [
            {
              test: /\.html$/,
              loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
              },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'vue-style-loader',
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }
            },
            {
                test: /\.coffee$/,
                loader: 'coffee-loader',
                options: {
                    transpile: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.coffee']
    },
    devServer: {
        index: "index.html",
        port: 9000
      },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin(),
        new MiniCssExtractPlugin()
    ]
};