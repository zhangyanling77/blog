/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:59:35 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-09-14 01:16:55
 */
import { combineReducers } from 'redux';
import publishArticle from './publishArticle.js';
import asyncTest from './asyncTest'
import createHistory from 'history/createBrowserHistory'
import article from './article';
const blog = combineReducers({ article, publishArticle, asyncTest })
export default blog;