import React, { Component } from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import "./styles.css";

import { grey500, blue500 } from "material-ui/styles/colors";

const Styles = {
  floatingLabelStyle: {
    color: grey500
  },
  floatingLabelFocusStyle: {
    color: blue500
  }
};

class LoginBox extends Component {
  handleSignIn = e => {
    e.preventDefault();
    let username = this.refs.username.input.value;
    let password = this.refs.password.input.value;
    this.props.onSignIn(username, password);
  };

  render() {
    return (
      <div className="login-box-container">
        <Paper className="login-paper" zDepth={4}>
          <div className="login-field">
            <TextField
              floatingLabelText="Username"
              floatingLabelStyle={Styles.floatingLabelStyle}
              floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
              ref={"username"}
            />
          </div>
          <div className="login-field">
            <TextField
              floatingLabelText="Password"
              floatingLabelStyle={Styles.floatingLabelStyle}
              floatingLabelFocusStyle={Styles.floatingLabelFocusStyle}
              ref={"password"}
            />
          </div>
          <RaisedButton
            onClick={this.handleSignIn}
            label="Default"
            style="login-button"
          />
        </Paper>
      </div>
    );
  }
}
export default LoginBox;
