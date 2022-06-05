//app entry point
//imports
const express  = require('express');
const bodyParser =  require('body-parser');

//routes
const bookRoutes = require('./routes/book.route');
const genreRoutes = require('./routes/genre.route');
const authorRoutes = require('./routes/author.route');


// require('./config/db.config');

//express app isntance
const app = express();

//parser middlewares
app.use(bodyParser.urlencoded({extended:false}));//parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.json());//parse request data content type application/json

//routes middlewares
app.use('/api/book', bookRoutes);
app.use('/api/author', authorRoutes);
app.use('/api/genre', genreRoutes);

//server port setup
const PORT = process.env.PORT || 8081;

//test endpoint
app.get('/', (req, res)=>{
    res.status(200).json({msg: "welcome to express crud api!!"});
});
//create connection
app.listen(PORT, ()=>{
    console.log(`express server is running at port ${PORT}....`);
});

