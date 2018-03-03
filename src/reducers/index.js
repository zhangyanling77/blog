/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:59:35 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-03-04 00:55:06
 */
import createHistory from "history/createBrowserHistory";
import user from "./login";
import article from "./article";
import publishArticle from "./publishArticle.js";
const blog = { user, article, publishArticle };
export default blog;