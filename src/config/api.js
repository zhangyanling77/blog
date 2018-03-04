/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:54:56 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-04 16:08:43
 */
const source = `http://${API}:${APIPORT}`;

export default {
    getVerifyCode: source + "/getVerifyCode", //验证码
    checkRegist: source + "/checkRegist", //用户名是否已经被注册
    login: source + "/login", //登录
    regist: source + "/regist", //注册
    publishArticle: source + "/publishArticle", //发表
    getArticleList: source + "/getArticleList", //获取文章列表
    getTagList: source + "/tag", //获取标签列表
    getArticleById: source + "/getArticleById" //根据id获取文章列表
};