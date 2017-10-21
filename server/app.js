/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 16:56:49
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-10-22 00:14:01
 */
const path = require('path');
const koa = require('koa');
const route = require('koa-router');
const cors = require('koa-cors') //跨域配置
const session = require('koa-session2');
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const errorHandler = require('./controller/error');
const article = require('./route/article') //文章
const publish = require('./route/publish') //发表文章

const app = new koa();

const staticPath = '../dist';
app.use(static(path.join(__dirname, staticPath)))

app.use(errorHandler);
app.use(bodyParser({
    detectJSON: function(ctx) {
        return /\.json$/i.test(ctx.path);
    },
    extendTypes: {
        json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string 
    }
}));
app.use(session({
    key: "BLOGSESSION", //default "koa:sess"
    maxAge: 600000 //设置session超时时间
}))
app.use(cors());
app.use(publish.routes());
app.use(article.routes());
var a = {};
Object.defineProperty(a, "test", {
    configurable: false,
    writable: true,
    enumerable: true,
    value: 11111
});
console.log(a);
// var o = {}; // 创建一个新对象

// // 在对象中添加一个属性与数据描述符的示例
// Object.defineProperty(o, "a", {
//   value : 37,
//   writable : true,
//   enumerable : true,
//   configurable : true
// });
app.listen(8081, () => {
    console.log('server start at 8081');
});