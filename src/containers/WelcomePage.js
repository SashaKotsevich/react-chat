import { connect } from "react-redux";

import WelcomePage from "../components/WelcomePage";

import * as actions from "../actions/auth";

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  actions
)(WelcomePage);
