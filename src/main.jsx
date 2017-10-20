/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 13:02:07
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-10-19 17:01:16
 */
import React, {Component} from "react";
import {Provider} from 'react-redux';
// import { CSSTransitionGroup } from 'react-transition-group'
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk'
import reducers from './reducers/index.js';
import $ from 'jquery';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Rightcontent from "./components/page/content.jsx"
import NewArticle from './container/newArticle//newArticle.jsx'
import ArticleDetail from "./container/articleDetail/index.jsx"
import 'antd/dist/antd.css'
import './style/base.scss'
import './style/bootstrap/css/bootstrap.min.css'
const {Header, Footer, Sider, Content} = Layout;
// const history = createHistory(); const middleWare =
// routerMiddleware(history); //在redux 中使用router
const store = createStore(reducers, applyMiddleware(thunkMiddleWare))
store.subscribe(() => console.log(store.getState()))

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="root">
                        <Route exact path="/" component={Index}></Route>
                        <Route path="/write-article" component={NewArticle}></Route>
                    </div>
                </Router>
            </Provider>
        )
    }
}
const Index = ({match}) => {
    console.log(match)
    return (
        <Layout className="index-root">
            <Sider
                className="sider blog-flex blog-flex-row-y blog-flex-x-center blog-flex-y-center "
                width="400">
                <LeftMenu/>
            </Sider>
            <Layout className="right blog-flex blog-flex-y-center">
                <Router>
                    <Content className="content">
                        <Switch>
                            <Route path='/article-detail' component={ArticleDetail}></Route>
                            <Route path="/" component={Rightcontent}></Route>
                        </Switch>
                    </Content>
                </Router>
            </Layout>
        </Layout >
    )
}
const LeftMenu = (props) => {
    return (
        <div className="left-nav blog-flex blog-flex-row-y">
            <img src={require('./static/images/user.jpg')} alt=" 头像 "></img>
            <Link to="/article-list">
                文章列表
            </Link>
            <Link to="/write-article">
                发表文章
            </Link>
        </div>
    )
}