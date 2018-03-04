/*
 * @Author: wangcaowei 
 * @Date: 2018-03-01 01:36:41 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-04 16:14:20
 */
const router = require("koa-router");
const user = require("../services/user");
const utils = require("../services/utils");
const route = new router();
route
    .post("/checkRegist", async(ctx, next) => {
        ctx.body = {
            code: 200,
            userInfo: await utils.getUserByUserName(ctx.request.body.username)
        };
    })
    .post("/login", user.login)
    .post("/regist", user.regist)
    .get("/getVerifyCode", user.getVerifycode);
module.exports = route;