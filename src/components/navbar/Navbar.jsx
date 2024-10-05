import React from "react";
import "./Navbar.css";
import menu from "../../assets/images/menu-2-fill.svg";
import logo from "../../assets/images/head-logo.png";
function Navbar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <div className="logo-container">
          <div className="menu-icon">
            <img src={menu} alt="logo" />
          </div>
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
