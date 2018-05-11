import React, { Component } from "react";

import LoginPage from "../../components/LoginPage/LoginPage";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  signIn = (username, password) => {
    // This is where you would call Firebase etc
    this.setState({
      user: {
        username,
        password
      }
    });
  };

  signOut = () => {
    this.setState({ user: null });
  };

  render() {
    return (
        <LoginPage onSignIn={this.signIn} user={this.state.user} onSignOut={this.signOut} />
    );
  }
}

export default LoginContainer;
