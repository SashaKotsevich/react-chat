import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import fetch from "isomorphic-fetch";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class SignUp extends React.Component {
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
    if (this.validate()) {
      fetch("http://localhost:8000/v1/signup", {
        method: "POST",
        body: JSON.stringify({
          username: username.value,
          password: password.value
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(reason => console.error(reason));
    }
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
  validate() {
    const { password, repeatedPassword } = this.state;
    if (password.value !== repeatedPassword.value) {
      this.setState({
        repeatedPassword: {
          ...repeatedPassword,
          isValid: false
        }
      });
      return false;
    } else {
      this.setState({
        repeatedPassword: {
          ...repeatedPassword,
          isValid: true
        }
      });
      return true;
    }
  }

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
        <TextField
          required
          fullWidth
          label="Repeat password"
          type="password"
          name="repeatedPassword"
          autoComplete="current-password"
          margin="normal"
          value={this.state.repeatedPassword.value}
          className={classes.textField}
          error={!this.state.repeatedPassword.isValid}
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

export default withStyles(styles)(SignUp);
