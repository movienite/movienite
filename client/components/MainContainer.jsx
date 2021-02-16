import React, { Component } from "react";
import "../stylesheets/App.scss"
import Header from '../components/Header';
import MoviesDisplay from '../components/MoviesDisplay';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieDetails from "../components/MovieDetails";


class MainContainer extends Component {

  render() {

    const { query, results, savedList, title, updateQuery, updateSavedList, clearResults, querySearch, searchCount } = this.props;
    const firstSearchResults = searchCount > 1 ? '' : <MoviesDisplay results={results} clearResults={clearResults} title={title} updateSavedList={updateSavedList}/>

    return(
      <Router>
        <div className="MainContainer">
          <Header querySearch={querySearch} updateQuery={updateQuery} query={query}/>
          { firstSearchResults }
          <Switch>
            <Route path='/' exact render={() => <MoviesDisplay results={results} clearResults={clearResults} title={title} updateSavedList={updateSavedList}/>}/>
            <Route path='/saved' exact render={() => <MoviesDisplay results={savedList} clearResults={clearResults} title={'Saved Movies'} updateSavedList={updateSavedList}/>}/>
            <Route path='/movie/:id' component={MovieDetails}/>
          </Switch>
        </div>
        </Router>
    )
  }
}

export default MainContainer;