import React, { Component } from "react";
import { Link } from 'react-router-dom';
import MovieDetails from "../components/MovieDetails";

class MovieTile extends Component {
  render(props) {
    const { title, year, imdbId, url } = this.props; 
    return(
        <div className="MovieTile">
          <p>{title}</p>
          <p>{year}</p>
          <Link to={`/movie/${imdbId}`}><img className="tile-poster" src={url}></img></Link>
        </div>
    )
  }
}

export default MovieTile;

