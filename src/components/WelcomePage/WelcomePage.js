import React from "react";

const WelcomePage = ({ user, onSignOut }) => {

    return (
      <div>
        Welcome {user.username}!
        <a onClick={onSignOut}>
          Sign out
        </a>
      </div>
    );
  };

  export default WelcomePage;
