/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 13:02:07
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-07 18:08:45
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import RouteMap from "./route/index.jsx";
import store from "./config/redux.js";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
 
store.subscribe(() => console.log(store.getState()));
export default () => (
  <Provider store={store}>
    <ConnectedRouter history={createHistory()}>
      <RouteMap />
    </ConnectedRouter>
  </Provider>
);
