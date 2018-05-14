import React, { Component } from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { grey500, blue500 } from "material-ui/styles/colors";

import "./styles.css";

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
        <Paper className="login-paper" zDepth={5}>
          <div className="login-field">
          
            <TextField
              floatingLabelText="Username"
              floatingLabelStyle={{color: grey500}}
              floatingLabelFocusStyle={{color: blue500}}
              errorText={this.props.attemptedLogin ? "Incorrect Username" : false}
              ref={"username"}
            />
          </div>
          <div className="login-field">
            <TextField
              floatingLabelText="Password"
              floatingLabelStyle={{color: grey500}}
              floatingLabelFocusStyle={{color: blue500}}
              errorText={this.props.attemptedLogin ? "Incorrect Password" : false}
              ref={"password"}
            />
          </div>
          <div className="login-sign-in-button-container">
          <RaisedButton
            onClick={this.handleSignIn}
            label="Sign In"
            className="login-sign-in-button"
            labelColor={blue500}
          />
          </div>
          <div className="login-sign-in-options">
          <a href=""> <p>Forgot password?</p></a>
          <a href=""> <p>Sign Up</p></a>
          </div>
        </Paper>
      </div>
    );
  }
}
export default LoginBox;
