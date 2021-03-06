/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 16:56:49
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-13 00:26:14
 */
const path = require("path");
const koa = require("koa");
const os = require("os");
const route = require("koa-router");
const cors = require("koa-cors"); //跨域配置
const session = require("koa-session");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const errorHandler = require("./services/error");
const article = require("./route/article"); //文章
const publish = require("./route/publish"); //发表文章
const login = require("./route/user");
const app = new koa();

const staticPath = "../dist";
app.use(static(path.join(__dirname, staticPath)));
app.keys = ["ouermaimeng"];
app.use(
    session({
            key: "verifyCode", //default "koa:sess"
            maxAge: 60, //设置session超时时间
            renew: true
        },
        app
    )
);
app.use(errorHandler);
app.use(
    bodyParser({
        detectJSON: function(ctx) {
            return /\.json$/i.test(ctx.path);
        },
        extendTypes: {
            json: ["application/x-javascript"] // will parse application/x-javascript type body as a JSON string
        }
    })
);
app.use(cors());
app.use(login.routes());
app.use(publish.routes());
app.use(article.routes());
const APIPORT = os.type() == "Darwin" ? "8090" : "80";
app.listen(APIPORT, () => {
    console.log("server start at 80");
});