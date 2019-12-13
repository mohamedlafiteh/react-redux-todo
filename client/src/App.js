import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./Main";
import About from "./components/About";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/About' component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
