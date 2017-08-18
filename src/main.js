/*
 * @Author: wangcaowei 
 * @Date: 2017-08-18 13:02:07 
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2017-08-18 15:39:01
 */
import React, {Component} from "react";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk'
import reducers from './reducers/index.js';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Rightcontent from "./components/page/content.jsx"
import NewArticle from './container/newArticle//newArticle.jsx'
import ArticleDetail from "./container/articleDetail/index.jsx"
import 'antd/dist/antd.css'
import './style/base.scss'
import '../node_modules/simditor/styles/simditor.scss';
const {Header, Footer, Sider, Content} = Layout;
console.log(reducers)
const store = createStore(reducers,applyMiddleware(thunkMiddleWare))

let unsubscribe = store.subscribe(() => console.log(store.getState()))
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
const Index = () => (
    <Layout className="index-root">
        <Sider className="sider" width="400">
            <LeftMenu/>
        </Sider>
        <Layout>
            <Router>
                <Content className="content">
                    <Switch>
                        <Route path='/article-detail' component={ArticleDetail}></Route>
                        <Route component={Rightcontent}></Route>
                    </Switch>
                </Content>
            </Router>
        </Layout>
    </Layout>
)
const LeftMenu = (props) => {
    return (
        <Link to="/write-article">write</Link>
    )
}