/*
 * @Author: wangcaowei 
 * @Date: 2018-02-07 18:32:16 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-07 19:43:15
 */
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import asyncComponent from "../bundle.js";

const Index = asyncComponent(() => import("../container/index/index.jsx"));
const Rightcontent = asyncComponent(() => import("../components/page/content.jsx"));
const NewArticle = asyncComponent(() => import("../container/newArticle//newArticle.jsx"));
const ArticleDetail = asyncComponent(() => import("../container/articleDetail/index.jsx"));
const Test = asyncComponent(() => import("../test.jsx"));

export default () => (
  <Router>
    <div className="root">
      <Switch>
        <Route path="/write-article" component={NewArticle} />
        <Route
          path="/"
          render={() => (
            <Index>
              <Route exact path="/" component={Rightcontent} />
              <Route path="/article-detail" component={ArticleDetail} />
            </Index>
          )}
        />
      </Switch>
    </div>
  </Router>
);
