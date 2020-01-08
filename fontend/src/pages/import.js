import React, { Component } from "react";
import {
  Button,
  Card,
  Input,
  Layout,
  Row,
  Col,
  Drawer,
  DatePicker
} from "antd";
import "./home.css";
import axios from "../config/axios.setup";

const { MonthPicker } = DatePicker;
export default class ImportPage extends Component {
  state = {
    newItemVisible: false,
    updateItemTableVisible: false,
    docmentNo: "",
    item_id: 0,
    import: 0,
    group_id: 0,
    month: "",
    year: "",
    itemCode: "",
    itemName: "",
    item: []
  };

  // -----------------------------------Drawer-Handle------------------------------------------

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

  // ---------------------------------------------------------handle-function---------------------------------------

  handleBackHome = () => {
    this.props.history.push("/home");
  };

  handleApiImport = () => {
    axios
      .post("http://localhost:7070/create-rackLog")
      .then(res => {
        this.setState(() => ({
          docmentNo: res.data.docmentNo,
          item_id: res.data.item_id,
          import: res.data.import,
          group_id: res.data.group_id
        }));
      })
      .catch(err => console.error(err));
  };

  // --------------------------------------------------GROUP---------------------------------------
  handleApiImportGroup = () => {
    axios
      .post("http://localhost:7070/create-group", {
        year: this.state.year,
        month: this.state.month
      })
      .then(res => {
        console.log(res);
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
            left: "10%",
            bottom: "20%"
          }}
        >
          {/* -------------------------------------------------Back---------------------------------------- */}
          <Col>
            <Row style={{ display: "flex", justifyItems: "start" }}>
              <Button type="primary" onClick={this.handleBackHome}>
                HOME
              </Button>
            </Row>
          </Col>
          <Col>
            {/* --------------------------------------------------input----------------------------------------? */}
            <Row
              gutter={[24, 32]}
              type="flex"
              justify="space-around"
              align="middle"
            >
              <Col span={11}>
                <Card style={{ backgroundColor: "#172b37" }}>
                  <h1 style={{ color: "#41f0ec" }}>IMPORT</h1>
                  <br />
                  <Input placeholder="DOCUMENT NO." />
                  <br />
                  <br />
                  <Input
                    placeholder="ITEM CODE"
                    onChange={e => this.serState({ itemCode: e.target.value })}
                  />
                  <Button type="primary" onClick={this.showNewItemDrawer}>
                    NEW ITEM
                  </Button>
                  <MonthPicker
                    onChange={this.onChange}
                    placeholder="Select month"
                  />
                  <Button type="primary" onClick={this.handleApiImportGroup}>
                    SELECT DATE
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
              {/* ----------------------------------------------add-Rack------------------------------------------------ */}
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
        {/* --------------------------------------------Drawer---------------------------------------------- */}
        {/* ---------------------------Drawer-newitem---------------------------------- */}
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
          <h1 style={{ color: "#41f0ec" }}>ITEM LIST TABLE</h1>
          {this.state.item.map(item => (
            <Row>
              <Col>{item.itemCode}</Col>
              <Col>{item.itemName}</Col>
            </Row>
          ))}
        </Drawer>
      </Layout>
    );
  }
}
