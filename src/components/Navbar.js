import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <h1 className="logo">Lance's App</h1>
        <ul className="links">
          <li>Resources</li>
          <li>Need Help Now</li>
        </ul>
      </div>
    );
  }
}
