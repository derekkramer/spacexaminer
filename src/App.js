import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
            <Header />
        </div>
      </div>
    );
  }
}

export default App;
