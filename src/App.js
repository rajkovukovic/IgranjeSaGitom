import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dobrodosli u React</h1>
        </header>
        <p className="App-intro">
          Za pocetak, menjajete <code>src/App.js</code> i sacuvajte za riload.
        </p>
      </div>
    );
  }
}

export default App;
