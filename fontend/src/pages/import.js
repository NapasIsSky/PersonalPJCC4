import React, { Component } from "react";
import { Button, Card, Input, Layout, Row, Col, Drawer } from "antd";
import "./home.css";

export default class ImportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemVisible: false,
      updateItemTableVisible: false
    };

    this.showNewItemDrawer = this.showNewItemDrawer.bind(this);
    this.onNewItemClose = this.onNewItemClose.bind(this);
    this.showUpdateItemTableDrawer = this.showUpdateItemTableDrawer.bind(this);
    this.onUpdateItemTableClose = this.onUpdateItemTableClose.bind(this);
  }

  showNewItemDrawer = () => {
    this.setState({
      newItemVisible: true
    });
  };

  onNewItemClose = () => {
    this.setState({
      newItemVisible: false
    });
  };

  showUpdateItemTableDrawer = () => {
    this.setState({
      updateItemTableVisible: true
    });
  };

  onUpdateItemTableClose = () => {
    this.setState({
      updateItemTableVisible: false
    });
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
            top: "20%"
          }}
        >
          <Col>
            <Row
              gutter={[24, 32]}
              type="flex"
              justify="space-around"
              align="middle"
            >
              <Col span={11}>
                <Card style={{ backgroundColor: "#172b37" }}>
                  <h1 style={{ color: "#41f0ec" }}>STAFF_ID&DATETIME</h1>
                  <br />
                  <Input placeholder="DOCUMENT NO." />
                  <br />
                  <br />
                  <Input placeholder="ITEM CODE" />
                  <Input placeholder="ITEM NAME" />
                  <Button type="primary" onClick={this.showNewItemDrawer}>
                    NEW ITEM
                  </Button>
                  <br />
                  <br />
                  <Input placeholder="QUNTITY" />
                  <br />
                  <br />
                  <Input placeholder="DEFECT" />
                  <br />
                  <br />
                  <Input placeholder="TOTAL" />
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
          onClose={this.onNewItemClose}
          visible={this.state.newItemVisible}
        >
          <Input placeholder="TYPE"></Input>
          <Input placeholder="NAME"></Input>
          <Input placeholder="BRAND"></Input>
          <Input placeholder="MODEL"></Input>
          <Button type="primary" onClick={this.showUpdateItemTableDrawer}>
            SUBMIT
          </Button>
        </Drawer>
        <Drawer
          headerStyle={{ backgroundColor: "#172b37" }}
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={300}
          closable={false}
          onClose={this.onUpdateItemTableClose}
          visible={this.state.updateItemTableVisible}
        >
          <h1>ITEM LIST TABLE</h1>
        </Drawer>
      </Layout>
    );
  }
}
