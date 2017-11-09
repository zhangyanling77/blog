/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:55:59 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-11-09 17:45:45
 */
var path = require("path");
var HtmlwebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var ImageminPlugin = require("imagemin-webpack-plugin").default;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "src");
var BUILD_PATH = path.resolve(ROOT_PATH, "/dist/");
console.log(ROOT_PATH, APP_PATH);
module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    bundle: path.resolve(APP_PATH, "index.js"),
    vendor: ["react", "react-dom",  "react-router-dom", "react-hot-loader","redux", "react-redux",],
    vendor1:["antd"]
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    publicPath: "",
    filename: "js/[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loaders: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=8192&name=images/[hash:8].[name].[ext]"
        // // loader: 'file-loader',
        // options: {
        //     name: '../img/[name].[ext]?[hash]'
        // }
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
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({ title: "test" }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin('common.js'), // 默认会把所有入口节点的公共代码提取出来,生成一个common.js
    new ImageminPlugin({
      disble: process.env.NODE_ENV !== "production",
      pngquant: {
        quality: '50'
      }
    })
  ]
};
