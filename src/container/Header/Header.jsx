import React, { Component } from "react";
import logo from "../../logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          React Hello World
        </Navbar.Brand>
        <Navbar.Text href="#home" className="mr-auto">
          <Link to="/">Blog Post</Link>
          {""}
          <Link to="/product">Product</Link>
          {""}
          <Link to="/lifecycle">Life Cycle Comp</Link>
        </Navbar.Text>
      </Navbar>
    );
  }
}

export default Header;
