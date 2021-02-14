import React, { Component } from "react";
import "../stylesheets/App.scss"
import Header from '../components/Header';
import MoviesDisplay from '../components/MoviesDisplay';

// Ask server to pass the array directly, not an object
const search = {
  "movie_results":[
    {
    "title":"Batman & Bill",
    "year":2017,
    "imdb_id":"tt6067832",
    "url": "http://image.tmdb.org/t/p/original/gc1oyq0K8TdtFTXmYV03v536HsI.jpg"
    },
    {
    "title":"Batman & Mr. Freeze: SubZero",
    "year":1998,
    "imdb_id":"tt0143127",
    "url": "http://image.tmdb.org/t/p/original/eIeT9dsFeKiKNxjWyXHTL92TTrJ.jpg",
    },
    {
    "title":"Batman & Robin",
    "year":1997,
    "imdb_id":"tt0118688",
    "url": "http://image.tmdb.org/t/p/original/bsg0mrxUKyJoL4oSGP5mlhEsqp.jpg",
    }
  ]
}

class MainContainer extends Component {

  constructor() {
    super();

    this.state = { 
      query: '',
      results: [],
    }

    this.querySearch = this.querySearch.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidMount() {
    this.querySearch();
  }

  updateQuery(event) {
    const { value } = event.target;
    this.setState(state => {
      return {
        ...state, 
        query: value,
      }
    })
  }

  querySearch() {
    // Make get api request to backend route
    let query = this.state.query;

    //  fetch(`/api/search/${query}`, {
    //   method: 'GET',
    //   header: {
    //     'Content-Type': 'application/json; charset="UTF-8"',
    //   }
    //  })
    //   .then((data) => data.json())
    //   .then(data => {
    //     this.setState((state) => {
    //       return {
    //         query: '',
    //         results: data
    //       }
    //     })
    //   })

    // Receive data 
    let data = search.movie_results;
    // Pass received data to state by invoking setState 
    this.setState((state) => {
      return {
        ...state,
        results: data,
      }
    })
  }

  render() {
    return(
        <div className="MainContainer">
          <Header updateQuery={this.updateQuery} query={this.state.query}/> 
          <MoviesDisplay results={this.state.results}/>
        </div>
    )
  }
}

export default MainContainer;