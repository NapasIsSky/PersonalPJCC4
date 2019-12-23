import React, { Component } from "react";
import "./login.css";
import { Input, Button, Form, Icon, Layout, Drawer, Row, Col } from "antd";
import logo from "./webprojectTemp.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinvisible: false,
      signupvisible: false,
      includenewuser: false
    };
    this.showSigninDrawer = this.showSigninDrawer.bind(this);
    this.onSigninClose = this.onSigninClose.bind(this);
    this.showSignupDrawer = this.showSignupDrawer.bind(this);
    this.onSignupClose = this.onSignupClose.bind(this);
    this.showincludenewuserDrawer = this.showincludenewuserDrawer.bind(this);
    this.onincludenewuserClose = this.onincludenewuserClose.bind(this);
  }

  showSigninDrawer = () => {
    this.setState({
      signinvisible: true
    });
  };

  onSigninClose = () => {
    this.setState({
      signinvisible: false
    });
  };

  showSignupDrawer = () => {
    this.setState({
      signupvisible: true
    });
  };

  onSignupClose = () => {
    this.setState({
      signupvisible: false
    });
  };

  showincludenewuserDrawer = () => {
    this.setState({
      includenewuser: true
    });
  };

  onincludenewuserClose = () => {
    this.setState({
      includenewuser: false
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout style={{ backgroundColor: "#172b37" }}>
        <Row
          style={{
            position: "absolute",
            top: "20%",
            left: "30%",
            bottom: "20%"
          }}
        >
          <Col span={16} offset={1}>
            <Row type="flex" justify="start" align="top">
              <img
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
              ;
            </Row>
          </Col>
          <Col span={4} offset={2}>
            <Row type="flex" justify="space-around" align="middle">
              <Button
                type="primary"
                style={{ width: "100%", height: "100%" }}
                onClick={this.showSigninDrawer}
              >
                SIGN IN
              </Button>
            </Row>
            <br />
            <br />
            <Row type="flex" justify="space-around" align="middle">
              <Button
                type="primary"
                style={{ width: "100%", height: "100%" }}
                onClick={this.showSignupDrawer}
              >
                SIGN UP
              </Button>
            </Row>
          </Col>
        </Row>

        <Drawer
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={200}
          closable={false}
          onClose={this.onSigninClose}
          visible={this.state.signinvisible}
        >
          <Form onSubmit={this.handleSubmit} style={{ maxWidth: "300px" }}>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: "#aab5ee" }} />}
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  style={{ backgroundColor: "#7eaeff" }}
                  prefix={<Icon type="lock" style={{ color: "#aab5ee" }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                SIGN IN
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
        <Drawer
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={200}
          closable={false}
          onClose={this.onSignupClose}
          visible={this.state.signupvisible}
        >
          <Form onSubmit={this.handleSubmit} style={{ maxWidth: "300px" }}>
            <h1>WELCOME MR.MENAGER PLACSE VERLIFY YOUR ID.</h1>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: "#aab5ee" }} />}
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  style={{ backgroundColor: "#7eaeff" }}
                  prefix={<Icon type="lock" style={{ color: "#aab5ee" }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                onClick={this.showincludenewuserDrawer}
              >
                SIGN IN
              </Button>
            </Form.Item>
          </Form>
        </Drawer>
        <Drawer
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={550}
          closable={false}
          onClose={this.onincludenewuserClose}
          visible={this.state.includenewuser}
        >
          <h1>ADD NEW STAFF DATA</h1>
          <h3>DATE TIME</h3>
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            prefix={<Icon type="lock" style={{ color: "#aab5ee" }} />}
            type="password"
            placeholder="Password"
          />
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            prefix={<Icon type="lock" style={{ color: "#aab5ee" }} />}
            type="password"
            placeholder="Password"
          />
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            prefix={<Icon type="user" style={{ color: "#aab5ee" }} />}
            type="FIRSTNAME"
            placeholder="FIRSTNAME"
          />
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            prefix={<Icon type="user" style={{ color: "#aab5ee" }} />}
            type="LASTNAME"
            placeholder="LASTNAME"
          />
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            prefix={<Icon type="mail" style={{ color: "#aab5ee" }} />}
            type="EMAIL"
            placeholder="EMAIL"
          />
          <h3>ADDRESS</h3>
          <Input
            type="ADDRESS"
            placeholder="NO."
          />
          <Input
            type="ADDRESS"
            placeholder="VILLAGE"
          />
          <Input
            type="ADDRESS"
            placeholder="ROAD"
          />
          <Input
            type="ADDRESS"
            placeholder="PROVINCE"
          />
          <Input
            type="ADDRESS"
            placeholder="CITY"
          />
          <Input
            type="ADDRESS"
            placeholder="COUNTRY"
          />
          <Input
            type="ADDRESS"
            placeholder="POSTCODE"
          />
          <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                SIGN IN
              </Button>
        </Drawer>
      </Layout>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(LoginPage);

export default WrappedNormalLoginForm;
