import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage-wrapper">
        <section className="about-section">
          <h2>About</h2>
          <span>
            Laborum dolor enim quis excepteur voluptate nulla consectetur. Lorem
            ex occaecat duis ea elit velit aliqua cillum velit deserunt. Tempor
            id et pariatur et reprehenderit ipsum. Velit Lorem culpa eiusmod
            duis labore do labore ipsum exercitation. Adipisicing est officia
            aute duis laboris. Eiusmod ipsum labore aute fugiat.
          </span>
        </section>
        <section className="how-to-section">
          <h2>How To</h2>
          <span>
            Laborum dolor enim quis excepteur voluptate nulla consectetur. Lorem
            ex occaecat duis ea elit velit aliqua cillum velit deserunt. Tempor
            id et pariatur et reprehenderit ipsum. Velit Lorem culpa eiusmod
            duis labore do labore ipsum exercitation. Adipisicing est officia
            aute duis laboris. Eiusmod ipsum labore aute fugiat.
          </span>
        </section>
        <section className="click-here-section">
          <div className="click-here-resources">
            <h3>Resources</h3>
            <Link to="/resources" className="click-here-resources-button">
              Click Here
            </Link>
          </div>
          <div className="click-here-need-help">
            <h3>Need Help Now</h3>
            <Link to="/need-help-now" className="click-here-need-help-button">
              Click Here
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
