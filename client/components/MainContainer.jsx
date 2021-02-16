import React, { Component } from "react";
import "../stylesheets/App.scss"
import Header from '../components/Header';
import MoviesDisplay from '../components/MoviesDisplay';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieDetails from "../components/MovieDetails";


class MainContainer extends Component {

  constructor() {
    super();

    this.state = { 
      query: '',
      results: [],
    }

    this.querySearch = this.querySearch.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

  // componentDidMount() {
  //   //this.querySearch();
  // }

  clearResults() {
    this.setState(state => {
      return {
        query: '',
        results: []
      }
    })
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

  querySearch(event) {
    //event.preventDefault();

    // Make get api request to backend route
    let query = this.state.query;

     fetch(`/api/search/${query}`, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json; charset="UTF-8"',
      }
     })
      .then((data) => data.json())
      .then(data => {
        console.log(data);
        this.setState((state) => {
          return {
            query: '',
            results: data
          }
        })
      })

    //REQUEST WITH DUMMY DATA: 
    // let data = search.movie_results;
    // // Pass received data to state by invoking setState 
    // this.setState((state) => {
    //   return {
    //     ...state,
    //     results: data,
    //   }
    // })
  }



  render() {
    return(
      <Router>
        <div className="MainContainer">
          <Header querySearch={this.querySearch} updateQuery={this.updateQuery} query={this.state.query}/> 
          <Switch>
            <Route path='/' exact render={() => <MoviesDisplay results={this.state.results} clearResults={this.clearResults} />}/>
            <Route path='/movie/:id' component={MovieDetails}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default MainContainer;