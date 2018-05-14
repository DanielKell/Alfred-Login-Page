import React from "react";
import RaisedButton from "material-ui/RaisedButton";


import "./styles.css";

const WelcomePage = ({ user, onSignOut }) => {

    return (
      <div className="welcome-container">
        <h3 className="welcome-text">Hi {user.fullName}, welcome to your Alfred Dashboard! </h3>
        <div className="welcome-page-main"></div>
        <a onClick={onSignOut}>
        <RaisedButton >
          Sign out
          </RaisedButton>
        </a>
      </div>
    );
  };

  export default WelcomePage;
