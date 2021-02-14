import React, { Component } from "react";

class MoviesDetails extends Component {

  constructor() {
    super()

      this.state = {
        "Title": "",
        "Year": "",
        "Rated": "",
        "Released": "",
        "Runtime": "",
        "Genre": "",
        "Director": "",
        "Writer": "",
        "Actors": "",
        "Plot": "",
        "Language": "",
        "Country": "",
        "Awards": "",
        "Poster": "",
        "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "8.8/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
          },
          {
          "Source": "Metacritic",
          "Value": "74/100"
          }
        ],
        "Metascore": "",
        "imdbRating": "",
        "imdbVotes": "",
        "imdbID": "",
        "Type": "",
        "DVD": "",
        "BoxOffice": "",
        "Production": "",
        "Website": "",
        "Response": "",
        "trailer": ""
      }
    }

  componentDidMount() {
    //FETCH REQUEST TO BACKEND
    // const id = this.props.match.params.id;
    // fetch(`/api/select/${id}`, {
    //   method: 'GET',
    //   header: {
    //     'Content-Type': 'application/json; charset="UTF-8"',
    //   }
    //  })
    //   .then((data) => data.json())
    //   .then(data => {
    //     this.setState(state => data)
    //   })

    //DUMMY DATA: 
    const data = {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Sci-Fi, Thriller",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 152 wins & 218 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Ratings": [
          {
              "Source": "Internet Movie Database",
              "Value": "8.8/10"
          },
          {
              "Source": "Rotten Tomatoes",
              "Value": "87%"
          },
          {
              "Source": "Metacritic",
              "Value": "74/100"
          }
      ],
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "2,058,501",
      "imdbID": "tt1375666",
      "Type": "movie",
      "DVD": "N/A",
      "BoxOffice": "$292,576,195",
      "Production": "Syncopy, Warner Bros.",
      "Website": "N/A",
      "Response": "True",
      "trailer": "youtu.be/Jvurpf91omw"
    }

    this.setState(state => data);

  }

  render() {
    return(
      <div className="MovieDetails">
        <div className="detail-poster"><img src={this.state.Poster}/></div>
        <div className="details">
          <p><label>Title:</label> {this.state.Title}</p>
          <p><label>Year:</label> {this.state.Year}</p>
          <p><label>Rated:</label> {this.state.Rated}</p>
          <p><label>Released:</label> {this.state.Released}</p>
          <p><label>Runtime:</label> {this.state.Runtime}</p>
          <p><label>Genre:</label> {this.state.Genre}</p>
          <p><label>Director:</label> {this.state.Director}</p>
          <p><label>Writer:</label> {this.state.Writer}</p>
          <p><label>Actors:</label> {this.state.Actors}</p>
          <p><label>Plot:</label> {this.state.Plot}</p>
          <p><label>Language:</label> {this.state.Language}</p>
          <p><label>Country:</label> {this.state.Country}</p>
          <p><label>Awards:</label> {this.state.Awards}</p>
          <p><label>IMDB Rating:</label> {this.state.imdbRating}</p>
          <p><label>Rotten Tomatoes Rating:</label> {this.state.Ratings[1]["Value"]}</p>
          <p><label>Metacritic:</label> {this.state.Metascore}</p>
          <p><label>Box Office:</label> {this.state.BoxOffice}</p>
          <p><label>Production:</label> {this.state.Production}</p>
          <p><label>Trailer:</label> {this.state.trailer}</p>
        </div>
      </div>
    )
  }
}

export default MoviesDetails;