import React, { Component } from "react";
import { Button, Drawer, Layout, Row, Col, Modal } from "antd";
import "./home.css";
import axios from "../config/axios.setup";
import { Link } from "react-router-dom";

// -----------------------------------------------------Component---------------------------------------------------------

import StockHistoryTable from "../components/stockHisTable";
import StockTable from "../components/stockTable";

// -------------------------------------------------------image-------------------------------------------------------------

import iconLogout from "../pages/IconForPPPJCC4Logouticon.png";
import logo from "../pages/webprojectTemp.png";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      stockHistory: false,
      stockManagement: false,
      rackLogGroupData: "",
      modalStockHisVisible: false,
      modalStockRecVisible: false,
      currentId: null,
      stockRecently: null
    };
  }

  // ------------------------------------------------SETSTATE DRAWER---------------------------------------------------

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

  //----------------------------------modal-setState---------------------------------

  setmodalStockHisVisible(status) {
    this.setState({ modalStockHisVisible: status });
  }

  setRecentlyButton(status) {
    this.setState({ modalStockRecVisible: status });
  }

  closeRecentlyButton = () => {
    this.setState({
      modalStockRecVisible: false
    });
  };

  closeStockHis = () => {
    this.setState({ modalStockHisVisible: false });
  };

  closeModalStockRes = () => {
    this.setState({ modalStockRecVisible: false });
  };

  // --------------------------------handle function---------------------------------

  handleLogout = () => {
    this.props.history.push("/login");
  };

  handleApiStockHisGroup = x => {
    this.setState({ rackLogGroupData: x, currentId: x }, () =>
      this.setmodalStockHisVisible(true)
    );
  };

  handleApiStockRecently = y => {
    this.setState({ stockRecently: y }, () => this.setRecentlyButton(true));
  };
  // -------------------------------------render---------------------------------------

  render() {
    return (
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
          {/* --------------------------------------home-logout button---------------------------------------- */}
          <Col span={4} offset={2}>
            <Row type="flex" justify="space-around" align="middle" style={{marginBottom:'10px'}}>
              <Button type="primary" onClick={this.showDrawer}>
                MENU HOME
              </Button>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
              <Button type="primary" onClick={this.handleLogout}>
                LOGOUT
              </Button>
            </Row>
          </Col>
        </Row>
        {/* --------------------------------------------------------------Drawer------------------------------------------------------------- */}
        {/* ---------------------------------------Drawer-menu------------------------------------- */}
        <Drawer
          headerStyle={{ backgroundColor: "#172b37" }}
          drawerStyle={{ backgroundColor: "#172b37" }}
          width={300}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <br />
          <Button type="primary" onClick={this.showStockHistory}>
            STOCK HISTORY
          </Button>
          <br />
          <br />
          <Button type="primary" onClick={() => this.setRecentlyButton(true)}>
            STOCK RECENTLY STATUS
          </Button>
          <br />
          <br />
          <Button type="primary" onClick={this.showStockManagement}>
            STOCK MANAGEMENT
          </Button>
          {/* ---------------------------------------------Drawer-StockHistory--------------------------------------------------- */}
          <Drawer
            headerStyle={{ backgroundColor: "#172b37" }}
            drawerStyle={{ backgroundColor: "#172b37" }}
            width={300}
            closable={false}
            onClose={this.onStockHistoryDrawerClose}
            visible={this.state.stockHistory}
          >
            <h1 style={{ color: "#41f0ec" }}>STOCK HISTORY</h1>
            <br />
            <h2 style={{ color: "#41f0ec" }}>2019</h2>
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(1)}
                >
                  JAN
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(2)}
                >
                  FEB
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(3)}
                >
                  MAR
                </Button>
              </Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(4)}
                >
                  APL
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(5)}
                >
                  MAY
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(6)}
                >
                  JUN
                </Button>
              </Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(7)}
                >
                  JUL
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(8)}
                >
                  AUG
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(9)}
                >
                  SEP
                </Button>
              </Col>
            </Row>
            <Row gutter={[24, 24]}>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(10)}
                >
                  OCT
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(11)}
                >
                  NOV
                </Button>
              </Col>
              <Col span={8}>
                <Button
                  type="primary"
                  onClick={() => this.handleApiStockHisGroup(12)}
                >
                  DEC
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <h2 style={{ color: "#41f0ec" }}>2020</h2>
            <Button
              type="primary"
              onClick={() => this.handleApiStockHisGroup(13)}
            >
              JAN
            </Button>
          </Drawer>
          {/* ----------------------------------------------Drawer-Stock-Manage---------------------------------------------------- */}
          <Drawer
            headerStyle={{ backgroundColor: "#172b37" }}
            drawerStyle={{ backgroundColor: "#172b37" }}
            width={300}
            closable={false}
            onClose={this.onStockManagementDrawerClose}
            visible={this.state.stockManagement}
          >
            <h1 style={{ color: "#41f0ec" }}>STOCK MANAGEMENT</h1>
            <br />
            <Link to="/import">
              <Button type="primary">IMPORT</Button>
            </Link>
            <br />
            <br />
            <Link to="/export">
              <Button type="primary">EXPORT</Button>
            </Link>
          </Drawer>
        </Drawer>
        {/* -----------------------------------------------------Modal---------------------------------------------- */}
        {/* ---------------------------Modal-Stock-His------------------------------------------------------------------ */}
        <Modal
          centered
          visible={this.state.modalStockHisVisible}
          onOk={() => this.setmodalStockHisVisible(false)}
          onCancel={() => this.setmodalStockHisVisible(false)}
          style={{ position: "relative" }}
          width="1000px"
          footer={[
            <Button key="back" onClick={this.closeStockHis}>
              Return
            </Button>
          ]}
        >
          <StockHistoryTable currentId={this.state.currentId} />
        </Modal>
        {/* ----------------------------Modal-stock-recently------------------------------------- */}
        <Modal
          title="STOCK RECENTLY STATUS"
          centered
          visible={this.state.modalStockRecVisible}
          onOk={() => this.closeRecentlyButton(false)}
          onCancel={() => this.closeRecentlyButton(false)}
          style={{ position: "relative" }}
          width="1000px"
          footer={[
            <Button key="back" onClick={this.closeModalStockRes}>
              Return
            </Button>
          ]}
        >
          <StockTable />
        </Modal>
      </Layout>
    );
  }
}
