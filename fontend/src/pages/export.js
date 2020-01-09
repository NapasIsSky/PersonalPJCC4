import React, { Component } from "react";
import {
  Button,
  Drawer,
  Layout,
  Row,
  Col,
  Card,
  Input,
  DatePicker
} from "antd";
import "./home.css";
import axios from "../config/axios.setup";

const { MonthPicker } = DatePicker;

export default class ExportPage extends Component {
  state = {
    newCustomerVisible: false,
    updateCustomerTableVisible: false,
    documentNo: "",
    export: 0,
    group_id: 0,
    month: "",
    year: "",
    customer_id: 0,
    itemCode: "",
    itemName: "",
    item_id:"",
    // customerName: "",
    // customerTel: "",
    // customerEmail: "",
    // customerMaketingName: "",
    // customerMaketingContact: "",
    // customerAddress_id: 0,
    sumerizeItem: 0,
    itemPerPalate: 0
  };

  // // -----------------------------------------Drawer-function------------------------------------
  // showNewCustomerDrawer = () => {
  //   this.setState({
  //     newCustomerVisible: true
  //   });
  // };

  // onNewCustomerClose = () => {
  //   this.setState({
  //     newCustomerVisible: false
  //   });
  // };

  // showUpdateCustomerTableDrawer = () => {
  //   this.setState({
  //     updateCustomerTableVisible: true
  //   });
  // };

  // onUpdateCustomerTableClose = () => {
  //   this.setState({
  //     updateCustomerTableVisible: false
  //   });
  // };
  // -----------------------------------------handle-function-----------------------------------

  handleBackHome = () => {
    this.props.history.push("/home");
  };

  // --------------------------------------------------GROUP---------------------------------------
  handleApiExportGroup = () => {
    axios
      .post("http://localhost:7070/create-group", {
        year: this.state.year,
        month: this.state.month
      })
      .then(res => {
        console.log(res);
        this.setState({
          group_id: res.data.group_id
        });
      })
      .catch(err => console.error("can't post", err.message));
  };

  onChange = (date, dateString) => {
    console.log();
    const arrDate = dateString.split("-");
    const month = arrDate[1];
    const year = arrDate[0];
    this.setState(
      () => ({
        month,
        year
      }),
      () => console.log(this.state)
    );
  };

  // ---------------------------------------------------------item------------------------------------------

  handleApiImportItem = () => {
    axios
      .post("http://localhost:7070/create-item", {
        itemCode: this.state.itemCode,
        itemName: this.state.itemName
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error("can't post", err.message));
  };

  handleApiShowItem = () => {
    axios.get(`http://localhost:7070/item`).then(res => {
      this.setState({
        item: res.data
      });
    });
  };

  handleApiFinditemId = () => {
    axios.get(`http://localhost:7070/item/${this.state.itemCode}`).then(res => {
      console.log(",<<<<<<<<<<", res);
      this.setState({
        item_id: res.data.item_id,
        itemName: res.data.itemName
      });
    });
  };
  // ------------------------------------handle-export-to-racklog-stock-----------------------

  handleApiExporttoRacklog = () => {
    console.log({
      documentNo: this.state.documentNo,
      item_id: this.state.item_id,
      export: this.state.sumerizeItem,
      group_id: this.state.group_id,
      balance: this.state.sumerizeItem
    })
    axios
      .post(`http://localhost:7070/create-export`, {
        documentNo: this.state.documentNo,
        item_id: this.state.item_id,
        export: this.state.sumerizeItem,
        group_id: this.state.group_id,
        balance: this.state.sumerizeItem,
        customer_id: this.state.customer_id
      })
      .then(res => {
        this.handleApiExporttoStock(res.data.balance);
        console.log(res);
      })
      .catch(err => console.error("can't post", err.message));
  };

  // .then(res => {
  //   console.log(res);
  // })
  // .catch(err => console.error("can't post", err.message));

  handleApiExporttoStock = balance => {
    console.log({
      itemCode: this.state.itemCode,
      itemName: this.state.itemName,
      balance: balance,
      item_id: this.state.item_id
    });
    axios
      .post(`http://localhost:7070/create-stock`, {
        itemCode: this.state.itemCode,
        itemName: this.state.itemName,
        balance: balance,
        item_id: this.state.item_id
      })
      .then(res => {
        console.log(res);
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
            top: "10%",
            left: "5%",
            bottom: "20%"
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
            {/* ------------------------------------EXPORT------------------------- */}
            <Row
              gutter={[24, 32]}
              type="flex"
              justify="space-around"
              align="middle"
            >
              <Col span={11}>
                <Card bordered={false} style={{ backgroundColor: "#172b37" }}>
                  <h1 style={{ color: "#41f0ec" }}>EXPORT</h1>
                  <br />
                  <Input onChange={e => this.setState({documentNo: e.target.value})} placeholder="DOCUMENT NO." />
                  <br />
                  <br />
                  <Input
                    placeholder="CUSTOMER ID"
                    onChange={e =>
                      this.setState({ customer_id: e.target.value })
                    }
                  />
                  {/* <Input placeholder="CUSTOMER NAME" /> */}
                  {/* <Button type="primary" onClick={this.showNewCustomerDrawer}>
                    ADD NEW CUSTOMER
                  </Button> */}
                  <br />
                  <br />
                  <Input
                    placeholder="ITEM CODE"
                    onChange={e => this.setState({ itemCode: e.target.value })}
                  />
                  <Button
                    style={{ marginTop: "5px", marginBottom: "15px" }}
                    type="primary"
                    onClick={e => {
                      this.handleApiFinditemId();
                    }}
                  >
                    SELECT ITEM
                  </Button>
                  <MonthPicker
                    onChange={this.onChange}
                    placeholder="Select month"
                  />
                  <Button
                    style={{ marginTop: "5px", marginBottom: "15px" }}
                    type="primary"
                    onClick={this.handleApiExportGroup}
                  >
                    SELECT DATE
                  </Button>

                  <Input
                    placeholder="QUNTITY"
                    onChange={e =>
                      this.setState({ sumerizeItem: e.target.value })
                    }
                  />
                  <br />
                  <br />
                  <Input
                    placeholder="QUANTITY ITEM PER PALATE"
                    onChange={e =>
                      this.setState({ itemPerPalate: e.target.value })
                    }
                  />
                  <br />
                  <br />
                  <h4 style={{ color: "#41f0ec" }}>
                    {this.state.sumerizeItem / this.state.itemPerPalate} PALATE
                  </h4>
                </Card>
              </Col>
              <Col span={2}>
                <Button
                  onClick={this.handleApiExporttoRacklog}
                  type="primary"
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    padding: "2px"
                  }}
                >
                  NEXT
                </Button>
              </Col>
              {/* --------------------------------------------------add-rack----------------------------- */}
              {/* <Col span={11}>
                <Card title="PLEACES LOCATE EACH PALATE">
                  <ul>
                    <li>
                      <p>PALATE1 XXX PCS.</p>
                      <Button>CHOOSE RACK NO.</Button>
                    </li>
                  </ul>
                </Card>
              </Col> */}
            </Row>

            {/* <Row
              gutter={[16, 24]}
              type="flex"
              justify="space-around"
              align="middle"
            >
              <Button type="primary">SUBMIT</Button>
            </Row> */}
          </Col>
        </Row>
        {/* -----------------------------------------Drawer------------------------------------- */}
        {/* -------------------------Drawer-new-customer------------------------------------- */}
        {/* <Drawer
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
        </Drawer> */}
      </Layout>
    );
  }
}
