import WelcomePage from "../components/WelcomePage";
import { connect } from "react-redux";
import * as actions from "../actions/auth";

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  actions
)(WelcomePage);
