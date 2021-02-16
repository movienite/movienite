import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Header extends Component {

  render() {

    const { query, updateQuery, querySearch } = this.props;

    return(
        <div className="Header">
            <div>movienite</div>
            <div>
              <input onChange={updateQuery} value={query} className="search-input" type="text"></input>
              <Link to="/"><button onClick={querySearch} className="SearchButton">Search</button></Link>
            </div>
            <div><Link to="/saved">Saved Movies</Link></div>
        </div>
    )
  }
}

export default Header;