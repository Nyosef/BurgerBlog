// This is actually the main file that our app works with - server is not good old way - 
// usually server file is called app.js

const express = require('express');
// This is a logging middleware for logs
const morgan = require('morgan');
//connect to mongoose
const mongoose = require('mongoose');

//const Blog = require('./models/blog');
const { render } = require('ejs');

// importing the blogRoutes from routes/BlogRoutes
const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

// connect mongodb server
const dbURI = 'mongodb+srv://nyosef:test1234@cluster0.gq7xq.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology: true})
    .then((result)=>{ console.log('connected to db');
                    //listen for requests
                        app.listen(3000);})
    .catch((err)=>{ console.log(err)});

//register view engine
// default value of where it will look is the views folder
app.set('view engine','ejs');

// middleware for static files (included in express) - called static
// this means that any folder called public will be available - any file inside public will be avilabe as static file to frontend
app.use(express.static('public'));

// takes all url encoded data - passes it into an object that we can use in request object
app.use(express.urlencoded({extended: true}));

// middleware for logs
app.use(morgan('dev'));


//middleware that records to console requests that are coming in
// middleware is any code that runs between the request and the response(in server)

// next function will allow to go on after using a middleware
// app.use((req,res,next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

//listening to a get request
app.get('/',(req,res)=>{
res.redirect('/blogs');
});


//listening to a get request
app.get('/about',(req,res)=>{
    res.render('about', { title: 'About' });
});

// blog routes
// As we imported the blog routes, to save space - now we use them as if they were middleware
// first paramter says basically - only use these blogRoutes if starts with /blogs -----makes it more reuseable
app.use('/blogs',blogRoutes);


// 404 page - default. use - fire middleware in function
app.use((req,res)=> {
    res.status(404).render('404', { title: '404' });
});

