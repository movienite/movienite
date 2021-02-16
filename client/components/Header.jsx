import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Header extends Component {

  render() {

    const { query, updateQuery, querySearch } = this.props;

    return(
        <div className="Header">
            <div><img src="../movienitelogo.png"></img></div>
            <div>
              <input onChange={updateQuery} value={query} className="SearchBar" type="text"></input>
              <Link to="/"><button onClick={querySearch} className="SearchButton">Search</button></Link>
            </div>
            <div>Saved Movies</div>
        </div>
    )
  }
}

export default Header;