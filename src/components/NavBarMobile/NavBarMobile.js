import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Menu from "material-ui/svg-icons/navigation/menu";
import Divider from "material-ui/Divider";

import logo from "../../images/servant-outline.svg";
import "./styles.css";

//For Styling Hamburger Nav SVG
const iconStyles = {
  height: 35,
  width: 35
};

class NavBarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="nav-mobile-container">
        <div className="nav-mobile-hamburger-menu" onClick={this.handleToggle}>
          <Menu style={iconStyles} />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={open => this.setState({ open })}
          >
            <MenuItem onClick={this.handleClose}>
              <h3 className="nav-mobile-drawer-font">Home</h3>
            </MenuItem>
            <Divider />
            <MenuItem onClick={this.handleClose}>
              <h3 className="nav-mobile-drawer-font">About Us</h3>
            </MenuItem>
            <Divider />
            <MenuItem onClick={this.handleClose}>
              <h3 className="nav-mobile-drawer-font">Pricing</h3>
            </MenuItem>
            <Divider />
            <MenuItem onClick={this.handleClose}>
              <h3 className="nav-mobile-drawer-font">Contact</h3>
            </MenuItem>
            <Divider />
          </Drawer>
        </div>
        <div className="nav-mobile-logo">
          <img src={logo} alt="Alfred Logo" />
        </div>
        <div className="nav-mobile-login-logout" />
      </div>
    );
  }
}

export default NavBarMobile;
