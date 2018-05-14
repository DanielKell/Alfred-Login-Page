import React, { Component } from "react";

import LoginPage from "../../components/LoginPage/LoginPage";
import { users } from "../../testDB/usersData.json";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      attemptedLogin: false
    };
  }

  signIn = (inputUsername, inputPassword) => {

    this.setState({attemptedLogin: true});

    let searchedUser = users.find(function(userDB) {
      return (
        userDB.username === inputUsername && userDB.password === inputPassword
      );
    });

    if (searchedUser) {

      {
        searchedUser.username === inputUsername &&
        searchedUser.password === inputPassword
          ? this.setState({
              user: {
                inputUsername,
                inputPassword,
                fullName: searchedUser.fullName
              }
            })
          : false;
      }
    } else {
      console.log(this.state.attemptedLogin);
    }
  };

  signOut = () => {
    this.setState({ user: null, attemptedLogin: false });
  };

  render() {
    return (
      <LoginPage
        onSignIn={this.signIn}
        user={this.state.user}
        onSignOut={this.signOut}
        attemptedLogin={this.state.attemptedLogin}
      />
    );
  }
}

export default LoginContainer;
