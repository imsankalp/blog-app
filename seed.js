const  mongoose = require('mongoose');
const Blog = require('./models/blog');

const arr = [
    {
        author: 'Sankalp',
        title: 'Test Blog',
        img: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
        author: 'Khushi',
        title: 'Test Blog',
        img: 'https://images.unsplash.com/photo-1489110804417-276c3f517515?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
        author: 'Tanvi',
        title: 'Test Blog',
        img: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
        author: 'Tester',
        title: 'Test Blog',
        img: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
];


function seed(){
    Blog.insertMany(arr)
        .then(()=>{
            console.log("DB SEEDED!");
        })
        .catch(err =>{
            console.log(err)
        })
}

module.exports = seed;