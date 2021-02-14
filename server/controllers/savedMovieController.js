const db = require('../models/movieModels');
var axios = require("axios");
const savedMovieController = {};



// This makes an API fetch to RapidAPI's IMDb Alternative API and grabs an array of objects containing
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


// This makes an API fetch to RapidAPI's IMDb Alternative API with a specific imdbId 
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


// This makes an API fetch to RapidAPI's IMDb API with the same imdbId as the previous mw 
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






module.exports = savedMovieController;
