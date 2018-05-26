import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="horz-linija" />
          <h1 className="App-title">ABC</h1>
        </header>
        <p className="App-intro">
          Za pocetak, menjajete <code>src/App.js</code> i sacuvajte za riload.
        </p>
        <ul className='lista2'>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>
    );
  }
}

export default App;
