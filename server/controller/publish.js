/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:19 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-24 21:43:31
 */
const user = require('./user');

exports.publish=(ctx)=>{
    console.log(ctx.request.body)
    ctx.body={
        status:200
    }
    // user.judgeLogin(ctx);
}