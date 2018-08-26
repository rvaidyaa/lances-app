import React, { Component } from "react";
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <h2 className="footer-logo">Lance's App</h2>
        <ul className="footer-links">
          <li>Resources</li>
          <li>Need Help Now</li>
        </ul>
      </div>
    );
  }
}
