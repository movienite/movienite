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
      savedList: [],
      title: '',
    }

    this.querySearch = this.querySearch.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.clearResults = this.clearResults.bind(this);
    this.updateSavedList = this.updateSavedList.bind(this);
  }

  componentDidMount() {
    this.updateSavedList();
  }

  updateSavedList() {
    fetch(`/api/userSavedList`, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json; charset="UTF-8"',
      }
     })
      .then((data) => data.json())
      .then(data => {
        console.log(data);
        this.setState((state) => {

          let newData = [];
          data.forEach(fav => {
            let newObj = {};
            newObj.Title = fav.title;
            newObj.imdbID = fav.imdb_film_id;
            newObj.Year = fav.release_date.substring(7);
            newObj.Poster = fav.poster;
            newData.push(newObj);
          })
          return {
            ...state,
            savedList: newData
          }
        })
      })
  }

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
            results: data,
            title: 'Search Results'
          }
        })
      })
  }

  render() {
    return(
      <Router>
        <div className="MainContainer">
          <Header querySearch={this.querySearch} updateQuery={this.updateQuery} query={this.state.query}/> 
          <Switch>
            <Route path='/' exact render={() => <MoviesDisplay results={this.state.results} clearResults={this.clearResults} title={this.state.title} updateSavedList={this.updateSavedList}/>}/>
            <Route path='/saved' exact render={() => <MoviesDisplay results={this.state.savedList} clearResults={this.clearResults} title={'Saved Movies'} updateSavedList={this.updateSavedList}/>}/>
            <Route path='/movie/:id' component={MovieDetails}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default MainContainer;