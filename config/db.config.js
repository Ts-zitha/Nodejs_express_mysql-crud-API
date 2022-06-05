const mysql = require('mysql');

//db config
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bookapp'
});

//connecting to database
dbConn.connect(err=>{
    if(err)throw err
    console.log('database connected successfull!!!');

    //mysql table queries
    let authors = `CREATE TABLE IF NOT EXISTS authors(
        author_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
        first_name VARCHAR (255) NOT NULL, 
        last_name VARCHAR (255) NOT NULL,
        country VARCHAR (255) NOT NULL,
        gender VARCHAR (255) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now())`;
    let genres = `CREATE TABLE IF NOT EXISTS genres(
        genre_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
        genre VARCHAR (255) NOT NULL, 
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now())`;    
    let books = `CREATE TABLE IF NOT EXISTS books(
        book_id INT UNSIGNED PRIMARY KEY  AUTO_INCREMENT,
        author_id INT UNSIGNED NOT NULL,
        genre_id INT UNSIGNED NOT NULL,
        title VARCHAR (255) NOT NULL,
        year VARCHAR (255) NOT NULL,
        FOREIGN KEY (author_id) REFERENCES authors (author_id) ON DELETE CASCADE,
        FOREIGN KEY (genre_id) REFERENCES genres (genre_id) ON DELETE CASCADE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW())`;
    
    //creating tables
    dbConn.query(authors, (err, res)=>{
        if(err)console.log('error while creating authors\'s table', err);
    });
    dbConn.query(genres, (err, res)=>{
        if(err)console.log('error while creating genres\'s table', err);
    });
    dbConn.query(books, (err, res)=>{
        if(err)console.log('error while creaating book\'s table')
    });

});

module.exports = dbConn;