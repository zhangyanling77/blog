/*
 * @Author: wangcaowei 
 * @Date: 2017-09-06 23:16:25 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-29 00:05:56
 */
const router = require('koa-router');
const article = require('../controller/article')
const route = new router();
route.post('/getArticleList', article.getArticleList)
module.exports = route;