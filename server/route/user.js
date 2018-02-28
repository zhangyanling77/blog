/*
 * @Author: wangcaowei 
 * @Date: 2018-03-01 01:36:41 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-01 02:41:24
 */
const router = require("koa-router");
const user = require("../controller/user");
const route = new router();
route.post("/login", user.login).post("/regist", user.regist);
module.exports = route;