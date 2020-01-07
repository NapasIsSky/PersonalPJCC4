import React, { Component } from "react";
import * as allRoutes from "./index";
import rolesConfig from "../../config/roles";
import { Route, withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowRoutes: []
    };
  }

  componentDidMount() {
    let role = this.props.role;
    if (role) {
      this.setState({
        allowRoutes: rolesConfig[role].routes
      });
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <>
        {this.state.allowRoutes.map(route => (
          <Route
            exact
            path={route.url}
            component={allRoutes[route.component]}
            key={route.url}
          />
        ))}
        {this.props.role == "staff" ? <Redirect to="/login" /> : null}
      </>
    );
  }
}

export default withRouter(PrivateRoute);
