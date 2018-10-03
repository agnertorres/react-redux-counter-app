import React, { Component } from 'react';
import './App.css';

import store from './store/index'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store={ store }/>
      </div>
    );
  }
}

export default App;
