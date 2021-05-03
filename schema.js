var mongoose = require('mongoose')

module.exports = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true,
        },
        body: {
            type: Number,
            default: 70,   
        },
        comments: [{body: String, date: Date}],
        date: {
            type: Date,
            default: Date.now
        },
        hidden: {type: Boolean, default: false},
        meta: {
            votes: Number,
            favs: Number
        }
    }
)