import React, { Component } from "react";

class SearchBar extends Component {

  render() {

    const { query, updateQuery, querySearch } = this.props;

    return(
      <div className="search-bar">
        <input onChange={updateQuery} value={query} className="search-input" type="text"></input>
        <button onClick={querySearch} className="SearchButton">Search</button>
      </div>
    )
  }
}

export default SearchBar;