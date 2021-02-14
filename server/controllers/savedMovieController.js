const db = require('../models/movieModels');
var axios = require("axios");
const savedMovieController = {};



// This makes a GET fetch to RapidAPI's IMDb Alternative API and grabs an array of objects containing
// Title, Year, and imdbID (unused: Type) (case sensitive). Pass this onto the next middleware back in api.js.
savedMovieController.findTitleAndId = (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {s: `${req.params.title}`, page: '1-2', r: 'json'},
    headers: {
      'x-rapidapi-key': '47549ac224msh5a74db6a2cff7c9p1ed3ddjsn058880310a4c',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
  };
  
  axios.request(options)
    .then(response => {
      // console.log(response.data.Search);
      res.locals.searchResults = response.data.Search;
      return next();
    })
    .catch(err => {
      console.error(err);
      return next(err);
    });
};


// This makes a GET fetch to RapidAPI's IMDb Alternative API with a specific imdbId 
// and returns a large list of various movie details
savedMovieController.selectTitle = (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {i: `${req.params.imdbid}`, r: 'json'},
    headers: {
      'x-rapidapi-key': '47549ac224msh5a74db6a2cff7c9p1ed3ddjsn058880310a4c',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
  };

  axios.request(options)
    .then(response => {
      // console.log(response.data);
      res.locals.filmDetails = response.data;
      return next();
    })
    .catch(err => {
      console.error(err);
      return next(err);
    });
};


// This makes a GET fetch to RapidAPI's IMDb API with the same imdbId as the previous mw 
// and adds the youtube link for a movie trailer to the response
savedMovieController.getTrailer = (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
    params: {type: 'get-movie-details', imdb: `${req.params.imdbid}`},
    headers: {
      'x-rapidapi-key': '081dbdf260msh363bc0cda44327ep16cc20jsnbd0bdd18459b',
      'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com'
    }
  };
  
  axios.request(options)
    .then(response => {
      // console.log(response.data);
      res.locals.filmDetails.trailer = `youtu.be/${response.data.youtube_trailer_key}`;
      return next();
    })
    .catch(err => {
      console.error(err);
      return next(err);
    });
};



// This makes a POST fetch to our PostgreSQL database, storing most of the data 
// retrieved from the GET request for the selected film
savedMovieController.savedFilm = (req, res, next) => {
  const {
    imdb_film_id, title, release_date, mpaa_rating, runtime,
    genre, director, writer, actors, plot, language, country, 
    poster, imdb_score, imd_score, rt_score, mc_score, 
    box_office, movienite_user_rating, trailer_link
  } = req.body; // maybe req.params

  const values = [
    imdb_film_id, title, release_date, mpaa_rating, runtime,
    genre, director, writer, actors, plot, language, country, 
    poster, imdb_score, imd_score, rt_score, mc_score, 
    box_office, movienite_user_rating, trailer_link
  ];

  const sqlQuery = `
    INSERT INTO savedMovies 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
            $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
  `;

  db.query(sqlQuery, values)
    .then(response => {
      res.locals.savedFilm = response.rows[0]; // double check this with actual req.body
      return next();
    })
    .catch(err => {
      console.error(err);
      return next(err);
    });
};




// This makes a DELETE fetch to our PostgreSQL database, deleting the row data 
// for the provided imdb_id
savedMovieController.deleteFilm = (req, res, next) => {
  const value = [ req.params.imdbid ]; // double check against actual provided params
  const sqlQuery = `DELETE FROM savedmovies WHERE imdb_id = $1`;

  db.query(sqlQuery, values)
    .then(response => {
      res.locals.deletedFilm = response.rows[0]; // double check with actual req.body
      return next();
    })
    .catch(err => {
      console.error(err);
      return next(err);
    })
};


module.exports = savedMovieController;
