/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:23 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-22 00:20:36
 */
const router = require('koa-router');
const publish = require('../controller/publish')
const route = new router();
route.get('/publish',publish.publish)
module.exports = route;