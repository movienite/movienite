import React, { Component } from "react";
import SearchBar from './SearchBar';

class Header extends Component {

  render() {

    const { query, updateQuery, querySearch } = this.props;

    return(
        <div className="Header">
          
            <div>movienite</div>
            <div className="search-bar">
              <input onChange={updateQuery} value={query} className="search-input" type="text"></input>
              <button onClick={querySearch} className="SearchButton">Search</button>
            </div>            
            <div>Saved Movies</div>
        
        </div>
    )
  }
}

export default Header;