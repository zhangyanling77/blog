import React, { Component } from "react";
import { Button } from 'antd';
import "./header.scss";
export default class Header extends Component {
  render() {
    return (
      <div className="blog-header">
        <Button type="primary">登录</Button>
      </div>
    );
  }
}
