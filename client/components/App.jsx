import React, { Component } from "react";
import "../stylesheets/App.scss"
import Home from "../components/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContainer from "./MainContainer";

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={MainContainer}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;