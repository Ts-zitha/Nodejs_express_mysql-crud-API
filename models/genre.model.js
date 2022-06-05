const dbConn = require('../config/db.config');


//genre model
var Genre = function(genre){
    this.genre = genre.genre;
    this.created_at = new Date();
    this.updated_at = new Date();
};

//get all genres
Genre.getGenres = (callback)=>{
    dbConn.query('SELECT * FROM genres', (err, res)=>{
        if(err){
            console.log('error while fetching genres');
            callback(err, null);
        }else{
            console.log('genres fetched successfull');
            callback(null, res);
        }
    });
};
//get genre by id
Genre.getGenre = (id, callback)=>{
    dbConn.query('SELECT * FROM genres WHERE genre_id=?', id, (err, res)=>{
        if(err){
            console.log('error while getting book by id');
            callback(err, null);
        }else{
            console.log('genre fetched succesfully');
            callback(null, res);
        }
    });
};
//create genre
Genre.createGenre = (newGenre, callback)=>{
    dbConn.query('INSERT INTO genres SET?', newGenre, (err, res)=>{
        if(err){
            console.log('error while creating new genre');
            callback(err, null);
        }else{
            console.log('Genre created');
            callback(null, res);
        }
    });
};
//update genre
Genre.updateGenre = (id, updateData, callback)=>{
    dbConn.query('UPDATE genres SET genre=? WHERE genre_id=?', [updateData.genre, id], (err, res)=>{
        if(err){
            console.log('erro while updating genre');
            callback(err, null);
        }else{
            console.log('genre updated succesfully!!');
            callback(null, res);
        }
    });
};
//delete genre
Genre.deleteGenre = (id, callback)=>{
    dbConn.query('DELETE FROM genres WHERE genre_id=?', id, (err, res)=>{
        if(err){
            console.log('error while deleting genre');
            callback(err, null);
        }else{
            console.log('genre deleted successfull');
            callback(null, res);
        }
    });
};

module.exports = Genre;