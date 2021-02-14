import React, { Component } from "react";
import MovieTile from '../components/MovieTile';
import MovieDetails from '../components/MovieDetails';

class MoviesDisplay extends Component {

  render(props) {
    //console.log(this.props) // { results: [..data] } 
    const { results } = this.props; 
    // const results = this.props.results;
    const tiles = results.map((result, index) => {
      return(<MovieTile key={index} 
                 title={result.title} 
                 year={result.year} 
                 imdbId={result.imdb_id} 
                 url={result.poster}
                 />)
    })
    return(
      <>
      <h1>Search Results</h1>
        <div className="MoviesDisplay">
          { tiles }
        </div>
      </>
    )
  }
}

export default MoviesDisplay;