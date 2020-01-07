import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import axios from "axios";

export default class StockHistoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rackLogdata: [],
      filterGroup: ""
    };
  }

  handleApistockhis() {
    axios.get(`http://localhost:7070/rackLog`).then(res => {
      this.setState({
        rackLogdata: res.data
      });
    });
  }

  componentWillMount() {
    this.handleApistockhis();
  }

  render() {
    console.log(this.state.rackLogdata, this.props.currentId);
    let filterData = this.state.rackLogdata.filter(
      x => x.group_id == this.props.currentId
    );
    console.log(filterData);

    return (
      <Layout>
        <h1 style={{ color: "#41f0ec" }}>STOCK HISTORY TABLE</h1>
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

        {filterData &&
          filterData.map(rackLog => (
            <Row
              gutter={[24, 8]}
              type="flex"
              justify="space-around"
              align="middle"
            >
              Hello
              <Col span={2}>{rackLog.createdAt}</Col>
              <Col span={2}>{rackLog.item.itemCode}</Col>
              <Col span={2}>{rackLog.item.itemName}</Col>
              <Col span={2}>{rackLog.documentNo}</Col>
              <Col span={2}>{rackLog.import}</Col>
              <Col span={2}>{rackLog.export}</Col>
              <Col span={2}>{rackLog.balance}</Col>
              <Col span={2}>{rackLog.customer.customerName}</Col>
              <Col span={2}>USER CODE</Col>
            </Row>
          ))}
      </Layout>
    );
  }
}
