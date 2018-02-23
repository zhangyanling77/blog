/*
 * @Author: wangcaowei
 * @Date: 2017-08-18 13:02:07
 * @Last Modified by: wangcaowei
 * @Last Modified time: 2018-02-07 18:31:46
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Layout } from "antd";
import BlogHeader from '../header/header.jsx'
import "../../style/bootstrap/css/bootstrap.min.css";
import "../../style/base.scss";
const { Header, Footer, Sider, Content } = Layout;

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props.children);
  }
  render() {
    return (
      <Layout className="index-root">
        <Sider className="sider blog-flex blog-flex-row-y blog-flex-x-center blog-flex-y-center " width="650">
          <div className="left-nav blog-flex blog-flex-row-y blog-flex-x-center">
            <img src={require("../../static/userImages/defaultPic.jpg")} alt=" 头像 " />
            <Link to="/write-article">发表文章</Link>
          </div>
        </Sider>
        <Layout className="right blog-flex blog-flex-y-center">
          <Header className="header"><BlogHeader /></Header>
          <Content className="content">{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}
