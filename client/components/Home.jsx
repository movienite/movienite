import React, { Component } from "react";

class Home extends Component {

  handleClick() {
    this.props.history.push('/search');
  }

  render() {
    return(
        <div className="home-div">
          <div className="home-logo">movienite</div>
            <div className="home-searchbar">
              <input className="search-input" type="text"></input>
              <button onClick={() => this.handleClick()} className="SearchButton">Search</button>
            </div>
        </div>
    )
  }
}

export default Home;