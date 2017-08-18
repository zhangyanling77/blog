/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 16:59:35 
 * @Last Modified by: wangcaowei 
 * @Last Modified time: 2017-08-18 16:59:35 
 */
import {combineReducers} from 'redux';
import publishArticle from './publishArticle.js';
import asyncTest from './asyncTest'

const blog = combineReducers({publishArticle,asyncTest})
export default blog;
