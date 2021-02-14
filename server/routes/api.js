const express = require('express');
const router = express.Router();
const savedMovieController = require('../controllers/savedMovieController');



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

// router.post('/liked', savedMovieController.likedFilm, (req, res) => {
//   res.status(200).json(res.locals.likedFilm);
// });

// router.update();

// router.delete();


module.exports = router;
