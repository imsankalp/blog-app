const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    comment: {
        type: String,
        required: true
    },

    upvote: {
        type: Number,
        min: 0
    }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports= Review; 