import React, { Component } from "react";
import "./login.scss";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "Please input your username!" }]
            })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} size="large" placeholder="Username" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} size="large" type="password" placeholder="Password" />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </FormItem>
          <FormItem>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox> Remember me </Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码?
            </a>
            Or <a href=""> 注册 </a>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default (Login = Form.create()(Login));
