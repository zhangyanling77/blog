/*
 * @Author: wangcaowei 
 * @Date: 2017-09-05 22:25:56 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-05 23:59:16
 */

/**
 * 错误处理
 * 
 * @param {any} ctx 
 * @param {any} next 
 */
module.exports =  async(ctx,next)=>{
    try {
        await next();
    } catch (e) {
        ctx.status=500;
        ctx.body={
            code:500,
            message:e.errors&&e.errors[0].message||e.message&&e.message||'服务器异常'
        }
    }
}