import React from "react";

import LoginBox from "../LoginBox/LoginBox";
import "./styles.css";
import logo from "../../images/servant-outline.svg";

const LoginPage = ({onSignIn, onSignOut, user, attemptedLogin}) => {

  return (
    <div className="login-container">
          <h3 className="login-page-tagline speech-bubble">
        Making your life a little easier
      </h3>
      <div className="login-page-title">
        <img src={logo} alt="Alfred logo" />
        <h2>Alfred</h2>
      </div>

            <LoginBox onSignIn={onSignIn} attemptedLogin={attemptedLogin}/>

    </div>
  );
};

export default LoginPage;
