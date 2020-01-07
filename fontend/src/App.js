import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router";
import { Layout } from "antd";
import { connect } from "react-redux";
import PrivateRoute from "./components/routes/privateRoute";

const { Content } = Layout;

class App extends React.Component {
  render() {
    // const role = this.props.staff.role;
    const role = "staff";
    console.log(role);
    return (
      <div className="App">
        <Layout>
          <Content style={{ height: "max-content", lineHeight: "0" }}>
            <Switch>
              <PrivateRoute role={role} />
            </Switch>
          </Content>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default App;
