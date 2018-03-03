import React, { Component } from "react";
import { connect } from "react-redux";
import { showLogin } from "../../actions/action";
import { Button } from "antd";
import "./header.scss";
const Header = props => (
  <div className="blog-header">
    {props.user ? (
      `你好，${props.user}`
    ) : (
      <Button type="primary" onClick={() => props.showLogin(props.status)}>
        登录
      </Button>
    )}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { status: state.user.showLogin, user: state.user.user };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLogin: currentStatus => {
      dispatch(showLogin(currentStatus));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
