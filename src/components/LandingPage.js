import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage-wrapper">
        <section className="about-section">
          <h2>About</h2>
        </section>
        <section className="how-to-section">
          <h2>How To</h2>
        </section>
        <section className="click-here-section">
          <div className="click-here-resources">
            <h3>Resources</h3>
          </div>
          <div className="click-here-need-help">
            <h3>Need Help Now</h3>
          </div>
        </section>
      </div>
    );
  }
}
