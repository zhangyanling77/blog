/*
 * @Author: wangcaowei 
 * @Date: 2017-09-06 23:16:25 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-03 23:53:01
 */
const router = require("koa-router");
const article = require("../services/article");
const route = new router();

route.post("/getArticleList", article.getArticleList).post("/getArticleById", article.getArticleList);

module.exports = route;