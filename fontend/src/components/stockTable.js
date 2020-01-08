import React, { Component } from "react";
import { Layout, Row, Col, Button, Modal } from "antd";
import axios from "axios";
import StockMapPage from "./stockMap";
export default class StockTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockdata: [],
      modalStockMapVisible: false
    };
  }

  handleApistock() {
    axios.get(`http://localhost:7070/stock`).then(res => {
      this.setState({
        stockdata: res.data
      });
    });
  }

  setModalStockMapVisible = () => {
    this.setState({
      modalStockMapVisible: true
    });
  };

  closeModalStockMapVisible = () => {
    this.setState({
      modalStockMapVisible: false
    });
  };

  componentDidMount() {
    this.handleApistock();
  }

  render() {
    return (
      <Layout>
        <h1 style={{ color: "#41f0ec" }}>STOCK TABLE</h1>
        <Row type="flex" justify="space-around" align="top">
          <Button type="primary" onClick={this.setModalStockMapVisible}>RackMap</Button>
        </Row>
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
        <Modal
          title="STOCK MAP RECENTLY STATUS"
          centered
          visible={this.state.modalStockMapVisible}
          style={{ position: "relative" }}
          width="1000px"
          footer={[
            <Button type="primary" onClick={this.closeModalStockMapVisible}>
              Return
            </Button>
          ]}
        >
          <StockMapPage />
        </Modal>
      </Layout>
    );
  }
}
