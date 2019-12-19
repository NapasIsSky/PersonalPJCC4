import React, { Component } from "react";
import "./login.css";
import { Input, Button, Form, Icon, Layout, Drawer } from "antd";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      stockHistory: false,
      stockManagement: false
    };
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout style={{ backgroundColor: "#172b37" }}>
        <Button type="ghost" onClick={this.showDrawer}>
          <image></image>
        </Button>
        <Drawer
          headerStyle={{ backgroundColor: "#172b37" }}
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={550}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form onSubmit={this.handleSubmit} style={{ maxWidth: "300px" }}>
          <Form.Item>
            {getFieldDecorator("username", {rules: [{ required: true, message: "Please input your username!" }]})
            (<Input prefix={<Icon type="user" style={{ color: "#aab5ee" }}/>}placeholder="Username"/>)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {rules: [{ required: true, message: "Please input your Password!" }]})
            (<Input style={{backgroundColor:'#7eaeff'}} prefix={<Icon type="lock" style={{ color: "#aab5ee" }} />} type="password" placeholder="Password"/>)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Sing in 
            </Button>
            <a href="">Sign up</a>
          </Form.Item>
        </Form> 
        </Drawer>
       
      </Layout>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(LoginPage);

export default WrappedNormalLoginForm;
