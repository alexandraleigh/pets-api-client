import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Organization from './views/Organization';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/organization" component={Organization} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
