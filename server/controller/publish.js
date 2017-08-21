/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:19 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-22 00:26:43
 */
const user = require('./user');

exports.publish=(ctx)=>{
    user.judgeLogin(ctx);
}