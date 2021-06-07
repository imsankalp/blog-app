const mongoose = require('mongoose');
const slugify = require('slugify');
const Review = require('./review');


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
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

//validating the value of slug, each time a new blog is created, with tite of the blog.
blogSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, {lower: true, strict: true})
    }
    next()
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;