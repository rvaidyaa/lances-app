import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <h2 className="footer-logo">
          <Link to="/">Lance's App</Link>
        </h2>
        <ul className="footer-links">
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="need-help-now">Need Help Now</Link>
          </li>
        </ul>
      </div>
    );
  }
}
