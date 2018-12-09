import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/landing';
import Cams from './pages/Cams';
import Games from './pages/Games';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/cams" component={Cams} /> */}
            <Route exact path="/games" component={Games} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
