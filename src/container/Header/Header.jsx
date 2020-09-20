import React, { Component } from "react";
import logo from "../../logo.svg";

import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Warunk Chicken
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
