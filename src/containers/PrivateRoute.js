import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router";
import { recieveAuth } from "../actions/auth";

class PrivateRoute extends React.Component {
  componentDidMount() {
    this.props.recieveAuth();
  }
  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/welcome" />
          )
        }
      />
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default withRouter(
  connect(
    mapStateToProps,
    { recieveAuth }
  )(PrivateRoute)
);
