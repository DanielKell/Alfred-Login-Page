import React, { Component } from 'react';

import NavBarItems from '../NavBarItems/NavBarItems';
import logo from '../../images/servant-outline.svg';
import './styles.css';

class NavBarDesktop extends Component {
    render() {
      return (
        <div className="nav-bar-container">
          <div className="nav-logo-container">
            <img src={logo} alt="Alfred Logo" />
          </div>
          <div className="nav-tabs-container">
            <NavBarItems />
          </div>
          <div className="nav-login">
            <p>Log Out</p>
          </div>
        </div>
      );
    }
  }
  
  export default NavBarDesktop;