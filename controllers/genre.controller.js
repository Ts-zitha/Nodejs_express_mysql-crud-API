const genreModel = require('../models/genre.model');



//getting all genres
exports.getGenres = (req, res)=>{
    genreModel.getGenres((err, data)=>{
        if(err)res.status(500).send({ msg: 'error occurd'});
        res.status(200).send(data);
    });
};
//get genre by id
exports.getGenreById = (req, res)=>{
    genreModel.getGenre(req.params.id, (err, data)=>{
       if(!err){
           if(data.length != 0){
            res.status(200).send(data);
           }else{
               res.status(404).json({msg : 'no genre with that id'})
           }
       }else{
           res.status(500).send({msg: 'error while fetching genre'})
       }
    });
};
//create genre
exports.createGenre = (req, res)=>{
    if(!req.body){
        res.status(400).json({msg:'content can not be empty'});
    };
    const newGenre = new genreModel({
        genre: req.body.genre
    });
    genreModel.createGenre(newGenre, (err, data)=>{
        if(err){
            res.status(400).json({msg: err});
        }else{
            res.status(200).json({ msg : 'genre created'});
        }
    });
};
//update genre
exports.updateGenre = (req, res)=>{
    if(!req.body){
        res.send(400).json({ msg: 'update content can not be empty'});
    };
    const updateData = new genreModel(req.body);
    genreModel.updateGenre(req.params.id, updateData, (err, data)=>{
        if(err){
            res.status(500).json({msg: err});
        }else{
            if(data.affectedRows == 0){res.status(404).json({msg: 'no genre with that id'});}
            else{res.status(200).json({msg: 'genre updated'});}
        }
    });
};
//delete genre
exports.deleteGenre = (req, res)=>{

    genreModel.deleteGenre(req.params.id, (err, data)=>{
        if(err){
            res.status(500).json({msg: err});
        }else{
            if(data.affectedRows == 0)
            {res.status(400).json({ msg : 'no genre with that id'})}
            else{res.status(200).json({ msg: 'genre deleted'});}
        }
    });
};