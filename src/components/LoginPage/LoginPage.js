import React from "react";
import Paper from "material-ui/Paper";

import LoginBox from "../LoginBox/LoginBox";
import "./styles.css";
import logo from "../../images/servant-outline.svg";

import FileCloudDownload from "material-ui/svg-icons/file/cloud-download";
import RateReview from "material-ui/svg-icons/maps/rate-review";
import Security from "material-ui/svg-icons/hardware/security";

const LoginPage = ({ onSignIn, attemptedLogin }) => {
  return (
    <div className="login-container">
      <div className="login-page-desktop-left">
        <h3 className="login-page-tagline speech-bubble">
          Making your life a little easier
        </h3>
        <div className="login-page-title">
        <div>
          <img src={logo} alt="Alfred logo" />
        </div>
          <h2>Alfred</h2>
        </div>
        <div className="login-page-alfred-details">
          <Paper zDepth={3} className="login-page-alfred-details-window">
            <div>
              <h4>Request Reviews</h4>
              <RateReview />
              <p>Ask your customers for reviews easily</p>
            </div>
          </Paper>
          <Paper zDepth={3} className="login-page-alfred-details-window">
            <div>
              <h4>Data Security</h4>
              <Security />
              <p>Feel comfort in all your data being secure</p>
            </div>
          </Paper>
          <Paper zDepth={3} className="login-page-alfred-details-window">
            <div>
              <h4>Download Offline</h4>
              <FileCloudDownload />
              <p>Save a copy of your data for offline viewing</p>
            </div>
          </Paper>
        </div>
      </div>
      <div className="login-page-desktop-right">
        <h4>Sign in to get started!</h4>
        <LoginBox onSignIn={onSignIn} attemptedLogin={attemptedLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
