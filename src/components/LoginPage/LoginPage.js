import React from "react";

import LoginBox from "../LoginBox/LoginBox";
import "./styles.css";
import logo from "../../images/servant-outline.svg";

import WelcomePage from "../WelcomePage/WelcomePage";

const LoginPage = ({onSignIn, onSignOut, user, attemptedLogin}) => {

  return (
    <div className="login-container">
      <div className="login-page-title">
        <img src={logo} alt="Alfred logo" />
        <h2>Alfred</h2>
      </div>
      <h3 className="login-page-tagline">
        Here to make your life a little easier
      </h3>

           {user ? (
            <WelcomePage user={user} onSignOut={onSignOut} />
          ) : (
            <LoginBox onSignIn={onSignIn} attemptedLogin={attemptedLogin}/>
          )}
    </div>
  );
};

export default LoginPage;
