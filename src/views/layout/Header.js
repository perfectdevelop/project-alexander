import React, { Component } from "react";
import { Link } from "react-router-dom";

import './header.css';
import logo from '../../assets/images/logo.png';


function Header() {
  return (
      <div class="nav">
        <img className = "logo" src={logo} alt="Logo" />
        <p><strong>Styerr</strong><br></br>Network</p>
      </div>
  );
}

export default Header;
