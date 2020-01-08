import React, { Component } from "react";
import { Layout, Row, Button, Col, Popover } from "antd";
import axios from "../config/axios.setup";
export default class StockMapPage extends Component {
  state = {
    rackMapNo: []
  };

  handleApiRackMap() {
    axios.get(`http://localhost:7070/rackMap`).then(res => {
      this.setState({
        rackMapNo: res.data
      });
    });
  }

  handleApiStock(){
    axios.post(`http://localhost:7070/`)
  }

  componentDidMount() {
    this.handleApiRackMap();
  }

  render() {
    return (
      <Layout>
        <h1 style={{ color: "#41f0ec" }}>PLASCE SELECT RACK</h1>
        {this.state.rackMapNo.map(rackMap => (
          <Row>
            <Col span={2}>
              <Popover placement="rightTop">
                <Button>{rackMap.rackMap_id}</Button>
              </Popover>
            </Col>
          </Row>
        ))}
      </Layout>
    );
  }
}
