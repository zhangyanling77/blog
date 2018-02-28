import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { regist,login } from "../../actions/action";
import "./login.scss";
const FormItem = Form.Item;

class Login extends Component {
  state = {
    isLogin: true
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, userInfo) => {
      if (!err) {
        this.state.isLogin ? this.props.login(userInfo) : this.props.regist(userInfo);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {this.state.isLogin ? "登录" : "注册"}
            </Button>
          </FormItem>
          <FormItem>
            <Checkbox> Remember me </Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码?
            </a>
            Or
            <a
              href="javascript:;"
              onClick={() => this.setState({ isLogin: !this.state.isLogin })}
            >
              {this.state.isLogin ? "注册" : "登录"}
            </a>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: userInfo => dispatch(login(userInfo)),
    regist: userInfo => dispatch(regist(userInfo))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  Form.create()(Login)
);
