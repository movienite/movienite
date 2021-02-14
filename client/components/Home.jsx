import React, { Component } from "react";

class Home extends Component {

  render() {

    return(
        <div className="Home">
          
          <div className="home-logo">movienite</div>
            <div className="home-searchbar">
              <input onChange={updateQuery} value={query} className="SearchBar" type="text"></input>
              <button onClick={querySearch} className="SearchButton">Search</button>
            </div>
        
        </div>
    )
  }
}

export default Home;