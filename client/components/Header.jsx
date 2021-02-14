import React, { Component } from "react";

class Header extends Component {

  render() {

    const { query, updateQuery, querySearch } = this.props;

    return(
        <div className="Header">
          
            <div>movienite</div>
            <div>
              <input onChange={updateQuery} value={query} className="SearchBar" type="text"></input>
              <button onClick={querySearch} className="SearchButton">Search</button>
            </div>
            <div>Saved Movies</div>
        
        </div>
    )
  }
}

export default Header;