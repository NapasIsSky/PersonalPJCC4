import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import axios from "axios";

export default class StockTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockdata: []
    };
  }

  handleApistock() {
    axios.get(`http://localhost:7070/stock`).then(res => {
      this.setState({
        stockdata: res.data
      });
    });
  }

  componentDidMount() {
    this.handleApistock();
  }

  render() {
    return (
      <Layout>
        <h1 style={{ color: "#41f0ec" }}>STOCK TABLE</h1>
        <Row gutter={[20, 8]} type="flex" justify="space-around" align="middle">
          <Col span={2}>ITEM CODE</Col>
          <Col span={2}>ITEM NAME</Col>
          <Col span={2}>BALANCE</Col>
        </Row>

        {this.state.stockdata.map(stock => (
          <Row
            gutter={[20, 8]}
            type="flex"
            justify="space-around"
            align="middle"
          >
            <Col span={2}>{stock.item.itemCode}</Col>
            <Col span={2}>{stock.item.itemName}</Col>
            <Col span={2}>{stock.balance}</Col>
          </Row>
        ))}
      </Layout>
    );
  }
}
