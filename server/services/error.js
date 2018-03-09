/*
 * @Author: wangcaowei 
 * @Date: 2017-09-05 22:25:56 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-09 16:15:50
 */
const path = require("path");
const log = require("log4js");
// 日志
log.configure({
  appenders: {
    cheese: {
      type: "file",
      filename: path.join(__dirname, "../log/log.log")
    }
  },
  categories: { default: { appenders: ["cheese"], level: "trace" } }
});
const logger = log.getLogger("blog");
/**
 * 错误处理
 *
 * @param {any} ctx
 * @param {any} next
 */
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    logger.trace(e.stack);
    ctx.body = {
      code: e.status || 500,
      message: (e.errors && e.errors[0].message) || (e.message && e.message) || "服务器异常"
    };
  }
};
