var dbConn = require('../config/db.config');

var Book = function(book){
    this.author_id = book.author_id;
    this.genre_id = book.genre_id
    this.title = book.title;
    this.year = book.year;
    this.created_at = new Date();
    this.updated_at = new Date(); 
};

//get all books
Book.getBooks = (callback)=>{
    const query = `SELECT books.title, books.year AS year_published, authors.first_name AS author_name, genres.genre
                    FROM ((books INNER JOIN authors ON books.author_id=authors.author_id )
                    INNER JOIN genres ON books.genre_id=genres.genre_id
                    ) `;
    
    dbConn.query(query, (err, res)=>{
        if(err) {
            console.log('error while getting books');
            callback(err,null);
        }else{
            console.log('books fetched successfully!');
            callback(null, res);
        } 
    });
};

//get book by id
Book.getBookById = (id, callback)=>{
    // const query = `SELECT books.title, books.year AS year_published, authors.first_name AS author_name, genres.genre
    // FROM ((books INNER JOIN authors ON books.author_id=authors.author_id )
    // INNER JOIN genres ON books.genre_id=genres.genre_id
    // )WHERE book_id=? `;
    dbConn.query('SELECT * FROM books WHERE book_id=?',id, (err, res)=>{
        if(err){
            console.log('error while getting book by id');
            callback(err, null);
        }else{
            console.log('book successfully retrieved');
            callback(null, res);
        }
    });
};

//create a book
Book.createBook = (newBook, callback)=>{
    dbConn.query('INSERT INTO books SET?', newBook, (err, res)=>{
        if(err){
            console.log('error while creating book');
            callback(err, null);
        }else{
            console.log('book created');
            callback(null, res);
        }
    });
};

//update book
Book.updateBook = (id, updateData, callback)=>{
    dbConn.query('UPDATE books SET author_id=?, genre_id=?, title=?, year=? WHERE book_id=? ', [updateData.author_id, updateData.genre_id,updateData.title, updateData.year, id], (err, res)=>{
        if(err){
            console.log('error');
            callback(err, null);
        }else{
            console.log('updated book');
            callback(null, res);
        }
    });
};

//delete book
Book.deleteBook = (id, callback)=>{
    dbConn.query('DELETE FROM books WHERE book_id=?', id, (err, res)=>{
        if(err){
            console.log('error');
            callback(err, null);
        }else{
            console.log('book deleted');
            callback(null, res);
        }
    });
};
module.exports = Book;