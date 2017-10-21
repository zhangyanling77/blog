/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:54:56 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-10-22 00:18:23
 */
const source = "http://localhost:8081";

export default {
    publishArticle: source + "/publishArticle", //发表
    getArticleList: source + "/getArticleList", //获取文章列表
    getTagList: source + '/tag', //获取标签列表
}