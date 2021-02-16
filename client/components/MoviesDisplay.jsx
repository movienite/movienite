import React, { Component } from "react";
import MovieTile from '../components/MovieTile';
import MovieDetails from '../components/MovieDetails';

class MoviesDisplay extends Component {

  render(props) {
    //console.log(this.props) // { results: [..data] } 
    const { results, clearResults } = this.props; 
    // const results = this.props.results;
    const tiles = Array.isArray(results) ? results.map((result, index) => {
      return(<MovieTile key={index} 
                 title={result.Title} 
                 year={result.Year} 
                 imdbId={result.imdbID} 
                 url={result.Poster}
                 clearResults={clearResults}
                 />)
    }) : (<div><h3>Sorry, couldn't find that movie!</h3>
          <img src="https://media2.giphy.com/media/iGpkO05xWTl17Vhq6Y/giphy.gif"/></div>);
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