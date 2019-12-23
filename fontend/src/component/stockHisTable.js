import React, { Component } from "react";
import { Layout, Row, Button, Col } from "antd";

export default class StockHistoryTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <Layout>
        <h1 style={{color:'#41f0ec'}}>STOCK HISTORY TABLE</h1>
        <Row gutter={[24, 8]} type="flex" justify="space-around" align="middle">
          <Col span={2}>DATE TIME</Col>
          <Col span={2}>ITEM CODE</Col>
          <Col span={2}>ITEM NAME</Col>
          <Col span={2}>DOCUMENT NO.</Col>
          <Col span={2}>IMPORT</Col>
          <Col span={2}>EXPORT</Col>
          <Col span={2}>BALANCE</Col>
          <Col span={2}>CUSTOMER</Col>
          <Col span={2}>USER CODE</Col>
        </Row>
      </Layout>
    );
  }
}
