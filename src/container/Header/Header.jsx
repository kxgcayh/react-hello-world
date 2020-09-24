import React, { Component, Fragment } from "react";
import logo from "../../logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    /* return (
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
          <Link to="/">BlogPost </Link>
          <Link to="/product">Product </Link>
          <Link to="/lifecycle">LifeCycComp </Link>
          <Link to="/youtube-component">YtComponent </Link>
        </Navbar.Text>
      </Navbar>
    ); */
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img
            alt="Logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <a className="navbar-brand">Belajar ReactJS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                BlogPost{" "}
              </Link>
              <Link className="nav-link" to="/product">
                Product{" "}
              </Link>
              <Link className="nav-link" to="/lifecycle">
                LifeCycComp{" "}
              </Link>
              <Link className="nav-link" to="/youtube-component">
                YtComponent{" "}
              </Link>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Header;
