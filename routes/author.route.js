const express = require('express');
const authorController = require('../controllers/author.controller');

//router instance
const router = express.Router();


router.get('/',authorController.getAuthors);
router.get('/:id',authorController.getAuthorById);
router.post('/', authorController.createAuthor);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);


module.exports = router;