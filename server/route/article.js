/*
 * @Author: wangcaowei 
 * @Date: 2017-09-06 23:16:25 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-10-31 18:01:16
 */
const router = require("koa-router");
const article = require("../controller/article");
const route = new router();

route.post("/getArticleList", article.getArticleList).post("/getArticleById", article.getArticleList);

module.exports = route;
