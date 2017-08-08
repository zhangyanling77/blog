import React, {Component} from "react";
import {Layout} from 'antd';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Rightcontent from "./components/page/content.jsx"
import NewArticle from './container/newArticle//newArticle.jsx'
import 'antd/dist/antd.css'
import './style/base.scss'

const {Header, Footer, Sider, Content} = Layout
export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="root">
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/article-detail/:id" component={NewArticle}></Route>
                </div>
            </Router>
        )
    }
}
const Index = () => (
    <Layout className="root">
        <Sider className="sider" width="350">
            Sider
        </Sider>
        <Layout>
            <Content className="content">
                <Rightcontent/>
            </Content>
        </Layout>
    </Layout>
)
const ArticleDetail = ({match}) => {
    console.log(match)
    return (
        <div>
            {`article${match.params.id}`}
        </div>
    )
}