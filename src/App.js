import React, { Component } from 'react';
import './App.css';
import PetsContainer from './components/PetsContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find-a-Pet</h1>
        </header>
        <PetsContainer />
      </div>
    );
  }
}

export default App;
