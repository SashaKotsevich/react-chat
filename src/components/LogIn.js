import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: "",
        isValid: true
      },
      password: {
        value: "",
        isValid: true
      },
      repeatedPassword: {
        value: "",
        isValid: true
      }
    };
  }
  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.onSubmit(username.value, password.value);
  };

  handleInputChange = event => {
    event.persist();
    const { name, value } = event.target;
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value: value
      }
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <TextField
          required
          fullWidth
          label="UserName"
          margin="normal"
          name="username"
          className={classes.textField}
          value={this.state.username.value}
          error={!this.state.username.isValid}
          onChange={this.handleInputChange}
        />
        <TextField
          required
          fullWidth
          type="password"
          label="Password"
          margin="normal"
          name="password"
          autoComplete="current-password"
          className={classes.textField}
          error={!this.state.password.isValid}
          value={this.state.password.value}
          onChange={this.handleInputChange}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          LOGIN
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LogIn);
