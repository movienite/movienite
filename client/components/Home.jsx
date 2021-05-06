import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Home(props){

  let history = useHistory();

  const { query, updateQuery, querySearch } = props;

  const handleClick = async () => {
    await querySearch();
    history.push('/search');
  }

  return(
    <div className="home-div">
      <div className="home-logo"><img src="../movienitelogo.png"></img></div>
        <div className="home-searchbar">
          <input onChange={updateQuery} className="search-input" type="text" value={query}></input>
          <button onClick={handleClick} className="SearchButton"><FontAwesomeIcon icon={faSearch} size="1x"/></button>
        </div>
    </div>
  )
}

export default Home;
