/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:23 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-23 22:56:38
 */
const router = require('koa-router');
const publish = require('../controller/publish')
const route = new router();
route.post('/publishArticle',publish.publish)
module.exports = route;