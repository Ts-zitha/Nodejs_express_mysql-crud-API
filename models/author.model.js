
const dbConn = require('../config/db.config');


//model schema

const Author = function(author){
    this.first_name = author.first_name;
    this.last_name = author.last_name;
    this.gender = author.gender;
    this.country = author.country;
    this.created_at = new Date();
    this.updated_at = new Date();
};
//get authors
Author.getAuthors = (callback)=>{
    dbConn.query('SELECT * FROM authors', (err, res)=>{
        if(err){
            console.log('error while fetching data');
            callback(err, null);
        }else{
            console.log('authors fetched successfully');
            callback(null, res);
        }
    });
};
//get author by id
Author.getAuthorById = (id, callback)=>{
    dbConn.query('SELECT * FROM authors WHERE author_id=?', id, (err, res)=>{
        if(err){
            console.log('error while fetching author by id');
            callback(err, null);
        }else{
            console.log('author fetched successfull');
            callback(null, res);
        }
    });
};
//create author
Author.createAuthor = (newAuthor, callback)=>{
    dbConn.query('INSERT INTO authors SET?', newAuthor, (err, res)=>{
        if(err){
            console.log('error while creating author');
            callback(err, null);
        }else{
            console.log('author created successfully!');
            callback(null, res);
        }
    });
};
//update author
Author.updateAuthor = (id, updateData, callback)=>{
    dbConn.query('UPDATE authors SET first_name=?, last_name=?, gender=?, country=? WHERE author_id=?', [updateData.first_name, updateData.last_name, updateData.gender, updateData.country, id], (err, res)=>{
        if(err){
            console.log('error while updating author');
            callback(err, null);
        }else{
            console.log('author update succefully');
            callback(null, res);
        }
    });
};
//delete author
Author.deleteAuthor  = (id, callback)=>{
    dbConn.query('DELETE FROM authors WHERE author_id=?', id, (err, res)=>{
        if(err){
            console.log('error while deleting author');
            callback(err, null);
        }else{
            console.log('author deleted succesfull!!');
            callback(null, res);
        }
    });
};
module.exports = Author;