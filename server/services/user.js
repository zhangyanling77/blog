/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:13 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-09 16:31:48
 */
const path = require("path");
const bcrypt = require("bcrypt");
const captcha = require("svg-captcha");
const sequelize = require("../db/db");
const utils = require("../services/utils");
const token = require("./token");
const userMod = sequelize.import(path.join(__dirname, "../models/users.js"));

/**
 * 登录
 *
 * @param {any} ctx
 * @param {any} next
 */
exports.login = async (ctx, next) => {
  let errorMsg = "",
    isEqual = false,
    { username, password, verifyCode } = ctx.request.body;
  // 取出对应用户的信息
  const user = await utils.getUserByUserName(username);
  // 验证验证码是否正确
  token.verifyToken(ctx, verifyCode.toLocaleUpperCase(), "验证码错误");
  if (user) {
    // 比较密码是否相等
    // 获取salt(存入的hash里面有对应的salt信息)根据salt再生成一次hash 比较两次是否相等
    isEqual = await bcrypt.compare(password, user.password);
  }
  ctx.body = {
    code: isEqual ? 200 : 201,
    user: isEqual ? user.username : "用户名或密码错误!"
  };
};

/**
 * 用户注册
 *
 * @param {any} ctx
 * @param {any} next
 */
exports.regist = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const hash = await bcrypt.hash(password, 10);
  await userMod.create({ username, password: hash });
  ctx.body = {
    code: 200,
    message: "注册成功"
  };
};
/**
 * 验证码
 *
 * @param {any} ctx
 * @param {any} next
 */
exports.getVerifycode = async (ctx, next) => {
  const verifyInfo = captcha.create({ height: 40, fontSize: 35 });
  token.createToken({ verifyText: verifyInfo.text.toLocaleUpperCase() });
  ctx.body = {
    code: 200,
    svgVerify: verifyInfo.data
  };
};
