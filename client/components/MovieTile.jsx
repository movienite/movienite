import React, { Component } from "react";
import { Link } from 'react-router-dom';

class MovieTile extends Component {

  handleClick() {
    console.log('clicked image');
  }

  render(props) {
    const { title, year, imdbId, url, clearResults } = this.props; 
    return(
        <div className="MovieTile">
          <p>{title}</p>
          <p>{year}</p>
          <Link to={`/movie/${imdbId}`}><span onClick={clearResults}><img className="tile-poster" src={url}></img></span></Link>
        </div>
    )
  }
}

export default MovieTile;

