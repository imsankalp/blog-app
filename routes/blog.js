const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const Review = require('../models/review');



//Getting all blogs
router.get('/blogs', async(req, res) => {

    const blogs = await Blog.find().sort({
        date: 'desc'
    });
    res.render('index', {blogs});
})

//Add new blogs
router.get('/blogs/new', (req, res) =>{
    res.render('new');
})
router.post('/blogs', async (req, res) =>{

   await Blog.create(req.body);
   res.redirect('/blogs');
})


//Show blogs
router.get('/blogs/:slug', async (req, res) => {

    const blog = await Blog.findOne({slug: req.params.slug}).populate('reviews');
    res.render('show', {blog});
})

//Deleting a BLOG
router.delete('/blogs/:slug', async (req, res) =>{

    await Blog.findOneAndDelete({slug: req.params.slug});
    res.redirect('/blogs');
})

//Creating a new commment
router.post('/blogs/:slug/review', async (req, res) => {
        const blog = await Blog.findOne({slug: req.params.slug});
        const review = new Review(req.body);

        blog.reviews.push(review);

        await review.save();
        await blog.save();

        res.redirect(`/blogs/${req.params.slug}`);
  
})

module.exports = router;