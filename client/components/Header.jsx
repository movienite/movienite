import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


class Header extends Component {

  render() {

    const { query, updateQuery, querySearch } = this.props;

    return(
        <div className="Header">
            <div><img src="../movienitelogo.png"></img></div>
            <div>
              <input onChange={updateQuery} value={query} className="search-input" type="text"></input>
              <Link to="/"><button onClick={querySearch} className="SearchButton"><FontAwesomeIcon icon={faSearch} size="1x"/></button></Link>
            </div>
            <div className="SavedMoviesLink"><Link to="/saved">Saved Movies</Link></div>
        </div>
    )
  }
}

export default Header;