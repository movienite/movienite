const express = require('express');
const router = express.Router();
const savedMovieController = require('../controllers/savedMovieController');



router.get('/search/:title', savedMovieController.findTitleAndId, savedMovieController.getPoster, (req, res) => {
  console.log(res.locals.filmWithPoster);
  res.status(200).json(res.locals.filmWithPoster);
});

// router.get();

// router.post('/liked', savedMovieController.likedFilm, (req, res) => {
//   res.status(200).json(res.locals.likedFilm);
// });

// router.update();

// router.delete();


module.exports = router;
