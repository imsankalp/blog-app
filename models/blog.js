const mongoose = require('mongoose');

//Making Schema

const blogSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    content: {
        type: String,
        required: true
    }
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;