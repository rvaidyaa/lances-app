import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Resources from "./components/Resources";
import NeedHelpNow from "./components/NeedHelpNow";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/need-help-now" component={NeedHelpNow} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
