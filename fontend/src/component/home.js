import React, { Component } from "react";
import { Button, Drawer } from "antd";
import './home.css';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, stockHistory: false };

    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.showStockHistory = this.showStockHistory.bind(this);
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

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open drawer
        </Button>
        <Drawer
          width={300}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Button type="primary" onClick={this.showStockHistory}>
            STOCK HISTORY
          </Button>
          <Drawer
            title="STOCK HISTORY"
            width={300}
            closable={false}
            onClose={this.onStockHistoryClose}
            visible={this.state.stockHistory}
          >
            <Button>years</Button>
          </Drawer>
          <div className='level-2-drawer'>
            <Button onClick={this.onClose} type="primary">
              HOME
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}
