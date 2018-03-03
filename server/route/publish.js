/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:23 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-03 23:52:59
 */
const router = require('koa-router');
const publish = require('../services/publish')
const route = new router();
route.post('/publishArticle', publish.publish).get('/tag', publish.tagList)
module.exports = route;