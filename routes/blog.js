const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');



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

    const blog = await Blog.findOne({slug: req.params.slug});
    res.render('show', {blog});
})



module.exports = router;