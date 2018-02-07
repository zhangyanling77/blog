/*
 * @Author: wangcaowei 
 * @Date: 2018-02-07 16:30:10 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-07 18:12:26
 */
import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import reducers from "../reducers/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
export default createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware, thunkMiddleWare)
);
