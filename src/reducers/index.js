/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:59:35 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-24 22:27:48
 */
import {combineReducers} from 'redux';
import publishArticle from './publishArticle.js';
import asyncTest from './asyncTest'
import createHistory from 'history/createBrowserHistory'
import { routerReducer } from 'react-router-redux'

const blog = combineReducers({publishArticle,asyncTest,router:routerReducer})
export default blog;
