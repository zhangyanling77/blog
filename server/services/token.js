/*
 * @Author: wangcaowei 
 * @Date: 2018-03-09 15:50:58 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-09 16:35:28
 */
const jwt = require("koa-jwt");
const jsonwebtoken = require("jsonwebtoken");
const tokenConf = require("../config/config").tokenConf;
/**
 * 生成token
 *
 * @param {any} data
 * @returns
 */
exports.createToken = data => {
    console.log(data)
  const token = jsonwebtoken.sign(data, tokenConf.secret, { expiresIn: tokenConf.validDate });
  return token;
};
/**
 * 验证token
 *
 * @param {any} ctx
 * @param {any} token
 * @param {any} errorMsg
 */
exports.verifyToken = (ctx, token, errorMsg) => {
  try {
      console.log()
    jsonwebtoken.verify(token, tokenConf.secret);
  } catch (error) {
    ctx.throw(401, errorMsg);
  }
};
