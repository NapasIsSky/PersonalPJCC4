import React, { Component } from "react";

import {Input, Button, Form, Icon} from "antd";

class LoginPage extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Form onSubmit={this.handleSubmit} style={{maxWidth: "300px"}}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>  
          <Button type="primary" htmlType="submit" style={{width: '100%'}}>
            Sing in
          </Button>
          Or <a href="">Sign up</a>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginPage);

export default WrappedNormalLoginForm;

