const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
//const seedDB = require('./seed');
const Blog = require('./models/blog');
const blogRoutes = require('./routes/blog');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

//Connecting Mongoose
mongoose.connect('mongodb://localhost/blogApp',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
.then(() => {
    console.log("DB connected!");
})
.catch(err => {
    console.log("Connection Failed");
    console.log(err);
});

//seedDB();

app.use(blogRoutes);


app.listen(3000, () => {
    console.log("Server running at port 3000");
})