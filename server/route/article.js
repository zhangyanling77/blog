/*
 * @Author: wangcaowei 
 * @Date: 2017-09-06 23:16:25 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-06 23:21:47
 */
const router = require('koa-router');
const article = require('../controller/article')
const route = new router();
route.get('/getAllList',article.getAllList)
module.exports = route;