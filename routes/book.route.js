
//Books routes
const express = require('express');
const bookController = require('../controllers/book.controller');

//init router
const router = express.Router();

//routes endpoints
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);


module.exports = router;
