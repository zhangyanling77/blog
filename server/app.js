/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 16:56:49
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-22 00:10:46
 */
const koa = require('koa');
const route = require('koa-router');
const cors = require('koa-cors') //跨域配置
const session = require('koa-session2');
const app = new koa();
const publish = require('./route/publish')//发表文章

const test = ctx => {
    ctx.accept = "json";
    ctx.body = {
        test: 'this is test'
    }
}
app.use(session({
    key: "BLOGSESSION",   //default "koa:sess"
    maxAge: 600000  //设置session超时时间
}))
app.use(cors());
app.use(publish.routes());

app.listen(9999, () => {
    console.log('server start at 9999');
});