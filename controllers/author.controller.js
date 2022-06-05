const authorModel = require('../models/author.model');

//get all authors
exports.getAuthors = (req, res)=>{
    authorModel.getAuthors((err, data)=>{
        if(err){
            res.json(err);
        }else{
            if(data.length == 0){
                res.json({msg: 'No authors available'});
            }else{
                res.status(200).send(data);
            };
        };
    });
};
//get author by id
exports.getAuthorById = (req, res) =>{
    authorModel.getAuthorById(req.params.id, (err, data)=>{
        if(err){
            res.status(500).json(err);
        }else{
            if(data.length != 0){
                res.status(200).send(data);
               }else{
                   res.status(404).json({msg : 'no author with that id'})
               };
        };
    });
};
//create author
exports.createAuthor = (req, res)=>{
    if(!req.body){
        res.status(400).json({msg:'content can not be empty'});
    };
    const newAuthor = new authorModel(req.body);
    authorModel.createAuthor(newAuthor, (err, data)=>{
        if(err){
            res.status(500).json(err);
        }else{
            res.status(200).json({msg: 'author created'});
        }
    });
};
//update author
exports.updateAuthor = (req, res)=>{
    if(!req.body){
        res.status(400).json({msg: 'content can not be empy'});
    }
    const updateAuthor = new authorModel(req.body);
    authorModel.updateAuthor(req.params.id, updateAuthor, (err, data)=>{
        if(err){
            res.status(500).json({msg: err});
        }else{
            if(data.affectedRows == 0){
                res.status(404).json({msg: 'no author with that id'});
            }
            else{
                res.status(200).json({msg: 'author updated'});
            };
        };
    });
};
//delete author
exports.deleteAuthor = (req, res)=>{
    authorModel.deleteAuthor(req.params.id, (err, data)=>{
        if(err){
            res.status(500).json(err);
        }else{
            if(data.affectedRows == 0){
                res.status(404).json({msg : 'no author with thata id'});
            }else{
                res.status(200).json({ msg: 'author deleted'});
            };
        };
    });
};