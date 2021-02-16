import React, { Component } from "react";
import { useHistory } from "react-router-dom";

function Home(props){

  let history = useHistory();

  const handleClick = async () => {
    await props.querySearch();
    history.push('/search');
  }

  const { query, updateQuery, querySearch } = props;

  return(
      <div className="home-div">
        <div className="home-logo">movienite</div>
          <div className="home-searchbar">
            <input onChange={updateQuery} className="search-input" type="text" value={query}></input>
            <button onClick={handleClick} className="SearchButton">Search</button>
          </div>
      </div>
  )
  
}

export default Home;