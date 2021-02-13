import React, { Component } from "react";
import MovieDetails from "../components/MovieDetails";

class MovieTile extends Component {
  render(props) {
    const { title, year, imdbId, url } = this.props; 
    return(
        <div className="MovieTile">
          <p>{title}</p>
          <p>{year}</p>
          <img className="tile-poster" src={url}></img>
        </div>
    )
  }
}

export default MovieTile;

