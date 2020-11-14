import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={() => <h1 className="my-5"> 404 Not Found</h1>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
