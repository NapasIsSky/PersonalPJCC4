import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Redirect } from "react-router";
import { Layout } from "antd";
import { connect } from "react-redux";
import PrivateRoute from "./components/routes/privateRoute";
import JwtDecode from "jwt-decode";

const { Content } = Layout;

class App extends React.Component {
  render() {
    let role = 'guest'
    const token = localStorage.getItem("ACCESS_TOKEN")
    if (token) {
      const user = JwtDecode(token);
      role = user.role
    }
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
