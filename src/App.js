import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout />
        </Router>
      </div>
    );
  }
}

export default App;
