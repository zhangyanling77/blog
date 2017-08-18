/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 16:56:49
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-18 18:04:50
 */
const koa = require('koa');
const route = require('koa-route');
const cors = require('koa-cors') //跨域配置
const app = new koa();

const test = ctx => {
    ctx.accept = "json";
    ctx.body = {
        test: 'this is test'
    }
}
app.use(cors());
app.use(route.get('/test', test))

app.listen(9999, () => {
    console.log('server start at 9999');
});