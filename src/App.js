import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Viewer from './components/Viewer';
import Manifest from './components/Manifest';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
