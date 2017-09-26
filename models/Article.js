var mongoose = require("mongoose")

var Schema = mongoose.Schema

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    excerpt: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    }
})

var Article = mongoose.model("Article", ArticleSchema)

module.exports = Article