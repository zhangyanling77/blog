/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:13 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-23 23:15:00
 */
exports.judgeLogin = (ctx)=>{
    if(!ctx.session.user){
        ctx.body="未登录";
        return true;
    }
    ctx.body="已登陆";
    return false;    
}