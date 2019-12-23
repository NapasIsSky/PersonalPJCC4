import React, { Component } from "react";
import { Layout, Row, Button, Col } from "antd";
import { connect } from 'react-redux'

class StockTable extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {

    return (
      <Layout>
        <h1 style={{ color: "#41f0ec" }}>STOCK TABLE</h1>
        <Row gutter={[20, 8]} type="flex" justify="space-around" align="middle">
          <Col span={2}>ITEM CODE</Col>
          <Col span={2}>ITEM NAME</Col>
          <Col span={2}>BALANCE</Col>
          <Col span={4}>
            <Button>RECENTLY RACK MAP</Button>
          </Col>
        </Row>

        {
            this.props.store.data.map(stock => {
                return <Row gutter={[20, 8]} type="flex" justify="space-around" align="middle">
                            <Col span={2}>{ stock.itemCode }</Col>
                            <Col span={2}>{ stock.itemName }</Col>
                            <Col span={2}>{ stock.balance }</Col>
                        </Row>
                }
            )
        }

      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
    store: state.store
})

export default connect(mapStateToProps, null)(StockTable)
