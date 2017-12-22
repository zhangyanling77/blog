/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 13:02:07
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-12-22 17:02:05
 */
import React, {Component} from "react";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk'
import reducers from './reducers/index.js';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import asyncComponent from './bundle.js';

const {Header, Footer, Sider, Content} = Layout;
const Rightcontent = asyncComponent(()=>import("./components/page/content.jsx"));
const NewArticle = asyncComponent(()=>import('./container/newArticle//newArticle.jsx'));
const ArticleDetail = asyncComponent(()=>import("./container/articleDetail/index.jsx"));
import './style/bootstrap/css/bootstrap.min.css'
import './style/base.scss'
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
    return (
        <Layout className="index-root">
            <Sider
                className="sider blog-flex blog-flex-row-y blog-flex-x-center blog-flex-y-center "
                width="650">
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
        <div className="left-nav blog-flex blog-flex-row-y blog-flex-x-center">
            <img src={require('./static/userImages/defaultPic.jpg')} alt=" 头像 "></img>
            <Link to="/write-article">
                发表文章
            </Link>
        </div>
    )
}