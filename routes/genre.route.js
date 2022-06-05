//genre Routes

const express = require('express');
const genreController = require('../controllers/genre.controller');
//instantiate router module
const router = express.Router();


//get genres
router.get('/', genreController.getGenres);
router.get('/:id', genreController.getGenreById);
router.post('/', genreController.createGenre);
router.put('/:id', genreController.updateGenre);
router.delete('/:id', genreController.deleteGenre);


module.exports = router;





