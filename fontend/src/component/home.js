import React, { Component } from "react";
import { Button, Drawer, Layout, Row, Col} from "antd";
import './home.css'

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      stockHistory: false,
      stockManagement: false
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.showStockHistory = this.showStockHistory.bind(this);
    this.onStockHistoryDrawerClose = this.onStockHistoryDrawerClose.bind(this);
    this.showStockManagement = this.showStockManagement.bind(this);
    this.onStockManagementDrawerClose = this.onStockManagementDrawerClose.bind(this);
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

  showStockHistory = () => {
    this.setState({
      stockHistory: true
    });
  };

  onStockHistoryDrawerClose = () => {
    this.setState({
      stockHistory: false
    });
  };

  showStockManagement = () => {
    this.setState({
      stockManagement: true
    });
  };

  onStockManagementDrawerClose = () => {
    this.setState({
      stockManagement: false
    });
  };

  render() {
    return (
      <Layout>
        <Button type="primary" onClick={this.showDrawer}>
          MENU HOME
        </Button>
        <Drawer
          headerStyle={{ backgroundColor: "#172b37" }}
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={300}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <br/>
          <Button type="primary" onClick={this.showStockHistory}>STOCK HISTORY</Button>
          <br/>
          <br/>
          <Button type="primary">STOCK RECENTLY STATUS</Button>
          <br/>
          <br/>
          <Button type="primary" onClick={this.showStockManagement}>STOCK MANAGEMENT</Button>
          <Drawer
            headerStyle={{ backgroundColor: "#172b37" }}
            drawerStyle={{ backgroundColor: "#172b37" }}
            width={300}
            closable={false}
            onClose={this.onStockHistoryDrawerClose}
            visible={this.state.stockHistory}
          >
            <h1 style={{color:'#41f0ec'}}>STOCK HISTORY</h1>
            <br/>
            <h2 style={{color:'#41f0ec'}}>2019</h2>
            <Row gutter={[24, 24]}>
              <Col span={8}><Button type="primary">JAN</Button></Col>
              <Col span={8}><Button type='primary'>FEB</Button></Col>
              <Col span={8}><Button type='primary'>MAR</Button></Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col span={8}><Button type="primary">APL</Button></Col>
              <Col span={8}><Button type='primary'>MAY</Button></Col>
              <Col span={8}><Button type='primary'>JUN</Button></Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col span={8}><Button type="primary">JUL</Button></Col>
              <Col span={8}><Button type='primary'>AUG</Button></Col>
              <Col span={8}><Button type='primary'>SEP</Button></Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col span={8}><Button type="primary">OCT</Button></Col>
              <Col span={8}><Button type='primary'>NOV</Button></Col>
              <Col span={8}><Button type='primary'>DEC</Button></Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <h2 style={{color:'#41f0ec'}}>2020</h2>
            <Button type="primary">JAN</Button>
          </Drawer>
          <Drawer
            headerStyle={{ backgroundColor: "#172b37" }}
            drawerStyle={{ backgroundColor: "#172b37" }}
            width={300}
            closable={false}
            onClose={this.onStockManagementDrawerClose}
            visible={this.state.stockManagement}
          >
            <h1 style={{color:'#41f0ec'}}>STOCK MANAGEMENT</h1>
            <br/>
            <Button type="primary">IMPORT</Button>
            <br/>
            <br/>
            <Button type="primary">EXPORT</Button>
          </Drawer>
        </Drawer>
      </Layout>
    );
  }
}