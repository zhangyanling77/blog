/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:55:59 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-24 09:56:25
 */
let path = require("path");
let os = require('os');
let HtmlwebpackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");
let ImageminPlugin = require("imagemin-webpack-plugin").default;
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, "src");
let BUILD_PATH = path.resolve(ROOT_PATH, "dist/");

let webpackConfig = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        bundle: path.resolve(APP_PATH, "index.js"),
        vendor: ["react", "react-dom", "react-router-dom", "react-hot-loader", "redux"]
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        publicPath: "",
        filename: "js/[name].js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    loader: "css-loader",
                    // publicPath: "/dist/css/"
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                    // publicPath: "/dist/css/"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]"
            },
            {
                test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
                loader: "babel-loader" //loader的名称（必须）
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        open: true
    },
    // devtool: process.env.NODE_ENV === "production" ? "cheap-module-source-map" : "cheap-module-eval-source-map",
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            API: JSON.stringify(process.env.NODE_ENV === "production" ? "120.78.139.110" : "localhost"),
            APIPORT: JSON.stringify(os.type() == "Darwin" ? '8090' : '80'), //Darwin macos Windows_NT windows mac下面80端口有其他的用
        }),
        new HtmlwebpackPlugin({ title: '' }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"]
        }), // 默认会把所有入口节点的公共代码提取出来,生成一个common.js
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
        })
    ]
};
console.log(process.env.NODE_ENV === "production");
if (process.env.NODE_ENV === "production") {
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}
module.exports = webpackConfig;