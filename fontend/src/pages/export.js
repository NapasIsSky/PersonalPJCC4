import React, { Component } from "react";
import { Button, Drawer, Layout, Row, Col, Card, Input } from "antd";
import "./home.css";

export default class ExportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCustomerVisible: false,
      updateCustomerTableVisible: false
    };
  }
  // -----------------------------------------Drawer-function------------------------------------
  showNewCustomerDrawer = () => {
    this.setState({
      newCustomerVisible: true
    });
  };

  onNewCustomerClose = () => {
    this.setState({
      newCustomerVisible: false
    });
  };

  showUpdateCustomerTableDrawer = () => {
    this.setState({
      updateCustomerTableVisible: true
    });
  };

  onUpdateCustomerTableClose = () => {
    this.setState({
      updateCustomerTableVisible: false
    });
  };
  // -----------------------------------------handle-function-----------------------------------


  handleBackHome = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <Layout
        style={{
          backgroundColor: "#172b37"
        }}
      >
        <Row
          type="flex"
          justify="space-around"
          align="middle"
          style={{
            position: "absolute",
            top: "20%",
            left: "10%"
          }}
        >
          <Col>
            <Row type="flex" justify="space-around" align="top">
              <Button type="primary" onClick={this.handleBackHome}>
                HOME
              </Button>
            </Row>
          </Col>
          <Col>
            <Row
              gutter={[24, 32]}
              type="flex"
              justify="space-around"
              align="middle"
            >
              <Col span={11}>
                <Card style={{ backgroundColor: "#172b37" }}>
                  <h1 style={{ color: "#41f0ec" }}>EXPORT</h1>
                  <br />
                  <Input placeholder="DOCUMENT NO." />
                  <br />
                  <br />
                  <Input placeholder="CUSTOMER CODE" />
                  <Input placeholder="CUSTOMER NAME" />
                  <Button type="primary" onClick={this.showNewCustomerDrawer}>
                    ADD NEW CUSTOMER
                  </Button>

                  <br />
                  <br />
                  <Input placeholder="QUNTITY" />
                  <br />
                  <br />
                  <Input placeholder="ITEM CODE" />
                  <Input placeholder="ITEM NAME" />
                  <br />
                  <br />
                  <Input placeholder="pcs." />
                  <br />
                  <br />
                  <h5 style={{ color: "#41f0ec" }}>FOR 1 PALATE =</h5>
                  <h5 style={{ color: "#41f0ec" }}>COUNT PALATE</h5>
                </Card>
              </Col>
              <Col span={2}>
                <Button type="primary">NEXT</Button>
              </Col>
              <Col span={11}>
                <Card title="PLEACES LOCATE EACH PALATE">
                  <ul>
                    <li>
                      <p>PALATE1 XXX PCS.</p>
                      <Button>CHOOSE RACK NO.</Button>
                    </li>
                  </ul>
                </Card>
              </Col>
            </Row>

            <Row
              gutter={[16, 24]}
              type="flex"
              justify="space-around"
              align="middle"
            >
              <Button type="primary">SUBMIT</Button>
            </Row>
          </Col>
        </Row>
        <Drawer
          headerStyle={{ backgroundColor: "#172b37" }}
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={300}
          closable={false}
          onClose={this.onNewCustomerClose}
          visible={this.state.newCustomerVisible}
        >
          <Input placeholder="CUSTOMER NAME"></Input>
          <Input placeholder="CUSTOMER ADDRESS"></Input>
          <Button>DETAIL</Button>
          <Input placeholder="CUSTOMER EMAIL"></Input>
          <Input placeholder="CUSTOMER TELEPHONE NO."></Input>
          <Input placeholder="CUSTOMER MAKETING"></Input>
          <Input placeholder="CUSTOMER MAKETING CONTACT"></Input>
          <Button type="primary" onClick={this.showUpdateCustomerTableDrawer}>
            SUBMIT
          </Button>
        </Drawer>
        <Drawer
          headerStyle={{ backgroundColor: "#172b37" }}
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={500}
          closable={false}
          onClose={this.onUpdateCustomerTableClose}
          visible={this.state.updateCustomerTableVisible}
        >
          <h1 style={{ color: "#41f0ec" }}>CUSTOMER TABLE</h1>
        </Drawer>
      </Layout>
    );
  }
}
