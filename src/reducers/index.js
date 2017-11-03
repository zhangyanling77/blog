/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:59:35 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-11-03 16:08:22
 */
import { combineReducers } from "redux";
import publishArticle from "./publishArticle.js";
import createHistory from "history/createBrowserHistory";
import article from "./article";
const blog = combineReducers({ article, publishArticle });
export default blog;
