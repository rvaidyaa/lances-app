import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <h1 className="logo">
          <Link to="/">Lance's App</Link>
        </h1>
        <ul className="links">
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/need-help-now">Need Help Now</Link>
          </li>
        </ul>
      </div>
    );
  }
}
