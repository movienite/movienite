const express = require('express');
const router = express.Router();
const savedMovieController = require('../controllers/savedMovieController');



router.get();

router.get();

router.post('/liked', savedMovieController.likedFilm, (req, res) => {
  res.status(200).json(res.locals.likedFilm);
});

router.update();

router.delete();


module.exports = router;
