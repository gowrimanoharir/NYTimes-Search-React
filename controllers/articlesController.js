const db = require("../models")

//define all functions that can be done on Article schema

module.exports = {
    
    //function to get all saved articles
    findAll: function(req, res){
        db.Article
            .find({})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },

    //function to save an article
    create: function(req, res){
        console.log(req.body)
        db.Article
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },

    //function to delete a saved article
    delete: function(req, res){
        db.Article
            .findById({_id: req.params.id})
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    }
}