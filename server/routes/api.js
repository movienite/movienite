const express = require('express');
const router = express.Router();
const savedMovieController = require('../controllers/savedMovieController');
const userListController = require('../controllers/userListController');
const { route } = require('../server');



router.get('/search/:title', savedMovieController.findTitleAndId, (req, res) => {
  console.log(res.locals.searchResults);
  res.status(200).json(res.locals.searchResults);
});

router.get('/select/:imdbid', 
  savedMovieController.selectTitle, 
  savedMovieController.getTrailer,
  (req, res) => {
    console.log(res.locals.filmDetails);
    res.status(200).json(res.locals.filmDetails);
  }
);

router.get('/select/exist/:imdbid', savedMovieController.checkSql, (req, res) => {
  res.status(200).json(res.locals.checkedQuery);
})

router.post('/saved', savedMovieController.savedFilm, (req, res) => {
  res.status(200).json(res.locals.savedFilm);
});

// router.update();

router.delete('/saved/:imdbid', savedMovieController.deleteFilm, (req, res) => {
  // console.log(res.locals.deletedFilm);
  res.status(200).json(res.locals.deletedFilm);
});



module.exports = router;
