/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:54:56 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-01 01:54:27
 */
const source = `http://${API}:${APIPORT}`;

export default {
    login: source + "/login", //登录
    regist: source + "/regist", //注册
    publishArticle: source + "/publishArticle", //发表
    getArticleList: source + "/getArticleList", //获取文章列表
    getTagList: source + "/tag", //获取标签列表
    getArticleById: source + "/getArticleById" //根据id获取文章列表
};