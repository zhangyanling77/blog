/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 13:02:07
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-06 18:03:18
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import reducers from "./reducers/index.js";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import asyncComponent from "./bundle.js";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import "./style/bootstrap/css/bootstrap.min.css";
import "./style/base.scss";
const Rightcontent = asyncComponent(() => import("./components/page/content.jsx"));
const NewArticle = asyncComponent(() => import("./container/newArticle//newArticle.jsx"));
const ArticleDetail = asyncComponent(() => import("./container/articleDetail/index.jsx"));
const { Header, Footer, Sider, Content } = Layout;
const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware, thunkMiddleWare)
);
// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

store.subscribe(() => console.log(store.getState()));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router>
            <div className="root">
              <Route path="/write-article" component={NewArticle} />
              <Route exact path="/" component={Index} />
            </div>
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}
const Index = ({ match }) => {
  return (
    <Layout className="index-root">
      <Sider className="sider blog-flex blog-flex-row-y blog-flex-x-center blog-flex-y-center " width="650">
        <LeftMenu />
      </Sider>
      <Layout className="right blog-flex blog-flex-y-center">
        <Content className="content">
          <Router>
            <Switch>
              <Route exact path="/article-detail" component={ArticleDetail} />
              <Route exact path="/" component={Rightcontent} />
            </Switch>
          </Router>
        </Content>
      </Layout>
    </Layout>
  );
};
const LeftMenu = props => {
  return (
    <div className="left-nav blog-flex blog-flex-row-y blog-flex-x-center">
      <img src={require("./static/userImages/defaultPic.jpg")} alt=" 头像 " />
      <Link to="/write-article">发表文章</Link>
    </div>
  );
};
