import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
const styles = theme => ({
  AuthConteiner: {
    margin: "10% 0 0 37.5%",
    width: "35%",
    height: "auto%",
    padding: "2%"
  }
});

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <AppBar color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              React Chat
            </Typography>
          </Toolbar>
        </AppBar>

        <Paper square className={classes.AuthConteiner}>
          <Tabs
            value={this.state.value}
            indicatorColor="secondary"
            textColor="primary"
            onChange={this.handleChange}
          >
            <Tab label="Log in " />
            <Tab label="Sign in" />
          </Tabs>
          {this.state.value === 0 && <LogIn onSubmit={this.props.login} />}
          {this.state.value === 1 && <SignUp onSubmit={this.props.signup} />}
        </Paper>
      </>
    );
  }
}

export default withStyles(styles)(WelcomePage);
