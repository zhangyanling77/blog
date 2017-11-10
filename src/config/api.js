/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:54:56 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-11-10 17:53:29
 */
const ENV = process.env.ENV;
const ip = ENV === "production" ? "120.78.139.110" : "localhost";
const source = `http://${ip}:80`;

export default {
  publishArticle: source + "/publishArticle", //发表
  getArticleList: source + "/getArticleList", //获取文章列表
  getTagList: source + "/tag", //获取标签列表
  getArticleById: source + "/getArticleById" //根据id获取文章列表
};
