import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Home(props){

  let history = useHistory();

  const handleClick = async () => {
    await props.querySearch();
    history.push('/search');
  }

  const { query, updateQuery, querySearch } = props;

  return(
      <div className="home-div">
        {/* <div className="home-logo"><img src="../movienitelogo.png"></img></div> */}
        <div className="home-logo moogle-logo">
          <span className="moogle-blue">M</span>
          <span className="moogle-red">o</span>
          <span className="moogle-yellow">o</span>
          <span className="moogle-blue">g</span>
          <span className="moogle-green">l</span>
          <span className="moogle-red">e</span>
        </div>
          <div className="home-searchbar">
            <input onChange={updateQuery} className="search-input" type="text" value={query}></input>
            <button onClick={handleClick} className="SearchButton"><FontAwesomeIcon icon={faSearch} size="1x"/></button>
          </div>
      </div>
  )
  
}

export default Home;