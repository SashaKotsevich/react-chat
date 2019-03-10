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
      }
    };
  }
  handleFormSubmit = event => {};

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
          name="username"
          margin="normal"
          id="standard-required"
          label="UserName"
          value={this.state.username.value}
          className={classes.textField}
          error={!this.state.username.isValid}
          onChange={this.handleInputChange}
        />
        <TextField
          required
          fullWidth
          id="standard-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          margin="normal"
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
