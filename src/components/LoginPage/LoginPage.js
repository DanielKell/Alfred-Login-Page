import React from "react";

import LoginBox from "../LoginBox/LoginBox";
import "./styles.css";
import logo from "../../images/servant-outline.svg";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-page-title">
        <img src={logo} alt="Alfred logo" />
        <h2>Alfred</h2>
      </div>
      <h3 className="login-page-tagline">
        Here to make your life a little easier
      </h3>
      <LoginBox />
    </div>
  );
};

export default LoginPage;
