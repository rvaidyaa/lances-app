import React, { Component } from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
