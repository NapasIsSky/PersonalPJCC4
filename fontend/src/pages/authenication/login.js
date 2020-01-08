import React, { Component } from "react";
import { Input, Button, Form, Icon, Layout, Drawer, Row, Col } from "antd";
import logo from "../webprojectTemp.png";
import axios from "../../config/axios.setup";
import { withRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinvisible: false,
      signupvisible: false,
      includenewuser: false,
      staff_username: "",
      staff_password: "",
      staff_firstname: "",
      staff_lastname: "",
      staff_email: "",
      staff_tel: 0,
      address_id: 0,
      address_no: "",
      address_village: "",
      address_road: "",
      address_province: "",
      address_city: "",
      address_country: "",
      address_postcode: ""
    };
  }

  // --------------------------------Drawerfunction-----------------------------
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

  // --------------------------handleFunction--------------------------------

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const username = values.username;
      const password = values.password;
      axios
        .post("/loginUser", { username, password })
        .then(result => {
          console.log(result);
          this.onSigninClose();
          const token = result.data.token;
          const user = jwtDecode(token);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("ACCESS_TOKEN", token);
          this.props.history.push("/home");
        })
        .catch(err => {
          console.error(err);
        });
    });
  };

  handleSubmitManager = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const username = values.username;
      const password = values.password;
      axios
        .post("/loginUser", { username, password })
        .then(result => {
          let token = result.data.token;
          let role = result.data.role;
          localStorage.setItem("ACCESS_TOKEN", token);
          localStorage.setItem("ACCESS_ROLE", role);
          let user = jwtDecode(token);
          if (user.role === "manager") {
            this.showincludenewuserDrawer();
          }
        })
        .catch(err => {
          console.error(err);
        });
    });
  };

  // ----------------------------------API---------------------------------------
  handleApiaddressSubmit = async e => {
    e.preventDefault();
    axios
      .post("http://localhost:7070/create-userAddress")
      .then(res => {
        this.setState(() => ({
          address_id: res.data.address_id
        }));
      })
      .catch(err => console.error(err));
  };

  handleSubmit = () => {
    console.log({
      address_id: this.state.address_id,
      username: this.state.staff_username,
      password: this.state.staff_password,
      firstname: this.state.staff_firstname,
      lastname: this.state.staff_lastname,
      email: this.state.staff_email,
      tel: this.state.staff_tel
    } );
    axios
      .post("/registerUser", {
        address_id: this.state.address_id,
        username: this.state.staff_username,
        password: this.state.staff_password,
        firstname: this.state.staff_firstname,
        lastname: this.state.staff_lastname,
        email: this.state.staff_email,
        tel: this.state.staff_tel
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      // ---------------------------------------------background----------------------------------
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
          {/* --------------------------------------signIn-signUp---------------------------------------- */}
          <Col span={4} offset={2}>
            <Row
              type="flex"
              justify="space-around"
              align="middle"
              style={{ marginBottom: "10px" }}
            >
              <Button type="primary" onClick={this.showSigninDrawer}>
                SIGN IN
              </Button>
            </Row>
            <br />
            <br />
            <Row type="flex" justify="space-around" align="middle">
              <Button type="primary" onClick={this.showSignupDrawer}>
                SIGN UP
              </Button>
            </Row>
          </Col>
        </Row>
        {/* ------------------------------------------------DrawerSignIn-----------------------------------------  */}
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
                  placeholder="Password"
                  type="password"
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
        {/* --------------------------------------------DrawerSingUp---------------------------------------------- */}
        {/* -----------------------managerLogin-------------------- */}
        <Drawer
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={400}
          closable={false}
          onClose={this.onSignupClose}
          visible={this.state.signupvisible}
        >
          <Form
            onSubmit={this.handleSubmitManager}
            style={{ maxWidth: "300px" }}
          >
            <h1 style={{ color: "#41f0ec" }}>WELCOME MR.MENAGER</h1>
            <h2 style={{ color: "#41f0ec" }}>PLACSE VERLIFY YOUR ID.</h2>
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
                  placeholder="Password"
                  type="password"
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
        {/* ------------------------------------------menegerResigterNewStaff------------------------------------------- */}
        <Drawer
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={550}
          closable={false}
          onClose={this.onincludenewuserClose}
          visible={this.state.includenewuser}
        >
          <h1 style={{ color: "#41f0ec" }}>ADD NEW STAFF DATA</h1>

          <h3 style={{ color: "#41f0ec" }}>ADDRESS</h3>
          <Input type="ADDRESS" placeholder="NO." onChange={e => this.setState({address_no: e.target.value})} />
          <Input type="ADDRESS" placeholder="VILLAGE"  onChange={e => this.setState({address_village: e.target.value})}/>
          <Input type="ADDRESS" placeholder="ROAD" onChange={e => this.setState({address_road: e.target.value})}/>
          <Input type="ADDRESS" placeholder="PROVINCE" onChange={e => this.setState({address_province: e.target.value})}/>
          <Input type="ADDRESS" placeholder="CITY" onChange={e => this.setState({address_city: e.target.value})}/>
          <Input type="ADDRESS" placeholder="COUNTRY" onChange={e => this.setState({address_country: e.target.value})}/>
          <Input type="ADDRESS" placeholder="POSTCODE" onChange={e => this.setState({address_postcode: e.target.value})}/>
          <Button onClick={this.handleApiaddressSubmit}>Confirm</Button>
          <br />
          <br />

          <h3 style={{ color: "#41f0ec" }}>STAFF</h3>
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            prefix={<Icon type="user" style={{ color: "#aab5ee" }} />}
            type="username"
            placeholder="Username"
            onChange={e => this.setState({ staff_username: e.target.value })}
          />
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            prefix={<Icon type="lock" style={{ color: "#aab5ee" }} />}
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ staff_password: e.target.value })}
          />
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            prefix={<Icon type="user" style={{ color: "#aab5ee" }} />}
            type="FIRSTNAME"
            placeholder="FIRSTNAME"
            onChange={e => this.setState({ staff_firstname: e.target.value })}
          />
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            prefix={<Icon type="user" style={{ color: "#aab5ee" }} />}
            type="LASTNAME"
            placeholder="LASTNAME"
            onChange={e => this.setState({ staff_lastname: e.target.value })}
          />
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            style={{ color: "#aab5ee" }}
            type="EMAIL"
            placeholder="EMAIL"
            onChange={e => this.setState({ staff_email: e.target.value })}
          />
          <Input
            style={{ backgroundColor: "#7eaeff" }}
            style={{ color: "#aab5ee" }}
            type="Tel"
            placeholder="Tel"
            onChange={e => this.setState({ staff_tel: e.target.value })}
          />
          <br />
          <br />

          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            onClick={this.handleSubmit}
          >
            REGISTER
          </Button>
        </Drawer>
      </Layout>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(LoginPage);

export default withRouter(WrappedNormalLoginForm);
