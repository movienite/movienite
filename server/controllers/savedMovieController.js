const db = require('../models/movieModels');
var axios = require("axios");
const savedMovieController = {};



// This makes an API fetch to RapidAPI and grabs an array of objects containing
// title, year, and imdb_id. Pass this onto the next middleware.
savedMovieController.findTitleAndId = (req, res, next) => {
  const options = {
    method: 'GET',
    url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
    params: {type: 'get-movies-by-title', title: `${req.params.title}`},
    headers: {
      'x-rapidapi-key': '081dbdf260msh363bc0cda44327ep16cc20jsnbd0bdd18459b',
      'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com'
    }
  };
  
  axios.request(options)
    .then(response => {
      // console.log(response.data.movie_results);
      res.locals.initialSearch = response.data.movie_results.slice(0, 4);
      return next();
    })
    .catch(err => {
      console.error(err);
      return next(err);
    });
};



savedMovieController.getPoster = async (req, res, next) => {
  const fetches = res.locals.initialSearch.map(film => {
    const options = {
      method: 'GET',
      url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
      params: {type: 'get-movies-images-by-imdb', imdb: `${film.imdb_id}`},
      headers: {
        'x-rapidapi-key': '081dbdf260msh363bc0cda44327ep16cc20jsnbd0bdd18459b',
        'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com'
      }
    };
    return (
      axios.request(options)
        .then(response => {
          return {
            ...film, 
            poster: response.data.poster,
          }
        })
        .catch(error => {
          console.error(error);
          return next(error);
        })        
    )
  })

  Promise.all(fetches)
    .then(results => {
      res.locals.filmWithPoster = results;
      return next();
      //console.log(results)
    });
};



module.exports = savedMovieController;
