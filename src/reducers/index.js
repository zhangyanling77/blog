/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:59:35 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-24 15:44:05
 */
import createHistory from "history/createBrowserHistory";
import showLogin from "./login";
import article from "./article";
import publishArticle from "./publishArticle.js";
const blog = { showLogin, article, publishArticle };
export default blog;
