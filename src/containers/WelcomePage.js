import { connect } from "react-redux";

import WelcomePage from "../components/WelcomePage";

import { login, signup, recieveAuth } from "../actions/auth";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { login, signup, recieveAuth }
)(WelcomePage);
