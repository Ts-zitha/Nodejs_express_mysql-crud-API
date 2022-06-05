const { status } = require('express/lib/response');
const bookModel = require('../models/book.model');

//get all books
exports.getBooks = (req, res)=>{
    bookModel.getBooks((err, data)=>{
        if(err){
            res.status(500).json(err);
        }else{
            if(data.length == 0){
                res.send({msg: 'no books available'});
            }else{
                res.status(200).json(data);
            }
        }
    });
};

//get book by
exports.getBookById = (req, res)=>{
    bookModel.getBookById(req.params.id, (err, data)=>{
        if(err) {
            res.status(500).json(err);
        }else{
            if(data.length == 0){
                res.status(404).json({msg: 'no book with that id'});
            }else{
                res.send(data);
            }
        }
    });
};

//create a book
exports.createBook = (req, res)=>{
    console.log('get a book by id');
    const newBook = new bookModel(req.body)
    bookModel.createBook(newBook, (err, data)=>{
        if(err){ 
            res.status(500).json({err});
        }else{
            res.status(200).json({msg: 'book created'});
        }
    });
};

//update a book
exports.updateBook = (req, res)=>{
    console.log('update book');

    bookModel.updateBook(req.params.id, new bookModel(req.body), (err, data)=>{
        if(err) res.status(400).json({ msg: err});
        res.status(200).send({ msg: 'book updated', data});
    });
};

//delete a book
exports.deleteBook = (req, res)=>{
    bookModel.deleteBook(req.params.id, (err, data)=>{
        if(err)res.status(400).json({msg : err.message});
        res.status(200).send({msg: 'book deleted successfuly!!'});
    });
};
