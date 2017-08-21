/*
 * @Author: wangcaowei 
 * @Date: 2017-08-21 23:52:13 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-22 00:30:50
 */
exports.judgeLogin = (ctx)=>{
    console.log(ctx.session);
    if(!ctx.session.user){
        ctx.body="未登录";
        return true;
    }
    ctx.body="已登陆";
    return false;    
}