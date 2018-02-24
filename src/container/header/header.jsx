import React, { Component } from "react";
import { connect } from "react-redux";
import { showLogin } from "../../actions/action";
import { Button } from "antd";
import "./header.scss";
const Header = props => (
  <div className="blog-Header">
    <Button type="primary" onClick={() => props.showLogin(props.status)}>
      登录
    </Button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return { status: state.showLogin };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLogin: currentStatus => {
      dispatch(showLogin(currentStatus));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
