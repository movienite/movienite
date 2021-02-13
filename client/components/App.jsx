import React, { Component } from "react";
import "../stylesheets/App.scss"
import MainContainer from "../components/MainContainer";

class App extends Component {
  render() {
    return(
        <div className="App">
          <MainContainer /> 
        </div>
    )
  }
}

export default App;