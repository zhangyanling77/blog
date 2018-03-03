import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Form, Icon, Input, Button, Checkbox } from "antd";
import { showLogin, checkRegist, regist, login } from "../../actions/action";
import "./login.scss";
const FormItem = Form.Item;

class Login extends Component {
  state = {
    isLogin: true
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, userInfo) => {
      if(err) return;
      if(this.state.isLogin){
        await this.props.login(userInfo);
        this.cancelModal();
      }else{
        this.props.regist(userInfo)
      }
    });
  };
  /**
   * 验证用户名是否存在
   *
   * @memberof Login
   */
  checkRegist = async (rule, value, callback) => {
    const user = await checkRegist(value),
      form = this.props.form;
    const message = user.userInfo ? "该名称已被注册" : "";
    message&&callback(message);
  };
  cancelModal = () => {
    this.props.showLogin(this.props.status);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title={this.state.isLogin ? "登录" : "注册"}
        visible={this.props.status}
        onCancel={this.cancelModal}
        footer={null}
      >
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "请输入用户名",
                  whitespace: true
                },
                {
                  validator: !this.state.isLogin && this.checkRegist
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="用户名"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                type="password"
                placeholder="密码"
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
      </Modal>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { status: state.user.showLogin };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLogin: currentStatus => dispatch(showLogin(currentStatus)),
    login: userInfo => dispatch(login(userInfo)),
    regist: userInfo => dispatch(regist(userInfo))
    // checkRegist:username=>dispatch(checkRegist(username))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  Form.create()(Login)
);
