/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:13 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-26 17:58:23
 */
const path = require("path");
const sequelize = require("../db/db");
const userMod = sequelize.import(path.join(__dirname, "../models/users.js"));
exports.judgeLogin = ctx => {
  if (!ctx.session.user) {
    ctx.body = "未登录";
    return true;
  }
  ctx.body = "已登陆";
  return false;
};

exports.login = (ctx, next) => {
};
