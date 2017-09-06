/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:23 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-06 23:38:42
 */
const router = require('koa-router');
const publish = require('../controller/publish')
const route = new router();
route.post('/publishArticle',publish.publish).get('/tag',publish.tagList)
module.exports = route;