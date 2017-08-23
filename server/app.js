/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 16:56:49
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-23 23:46:52
 */
const koa = require('koa');
const route = require('koa-router');
const cors = require('koa-cors') //跨域配置
const session = require('koa-session2');
const bodyParser = require('koa-bodyparser')
const app = new koa();
const publish = require('./route/publish')//发表文章

app.use(bodyParser({
    detectJSON: function (ctx) {
      return /\.json$/i.test(ctx.path);
    },
    extendTypes: {
        json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string 
      }
  }));
app.use(session({
    key: "BLOGSESSION",   //default "koa:sess"
    maxAge: 600000  //设置session超时时间
}))
app.use(cors());
app.use(publish.routes());

app.listen(9999, () => {
    console.log('server start at 9999');
});