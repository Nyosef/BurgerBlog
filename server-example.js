// -- Most important page/server! --
// This is the basic way - today everything is done with EXPRESS! --
// See express package file
// Simple routing server
// This is the server file that listens to everything
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// creating a server, returns a callback function
// callback function runs when we access the website for example
const server = http.createServer( (req, res) => {

// lodash - useful everyday tools
//A modern JavaScript utility library delivering modularity, performance & extras MIT
const num = _.random(0,20);
console.log(num);

const greet = _.once(() => {
    console.log('hello');
});

greet();
greet();

res.setHeader('Content-Type','text/html');

let path = './views/';

switch(req.url){

    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path +='about.html';
        res.statusCode = 200;
        break;
    case '/about-me':
        res.statusCode = 301;
        res.setHeader('Location','/about');
        res.end();
        break;
    default:
        path +='404.html';
        res.statusCode = 404;
        break;    
}

// send an html file
//when finished reading the file, launch callback function if err, show it, else send response with the html file
fs.readFile(path,(err,data)=>{

if(err){
    console.log(err);
} else{
    res.write(data);
    res.end();
}

});

});

// in order for it to listen, we will have to invoke listen to
// callback function fires when we start listening
server.listen(3000,'localhost', ()=>{

console.log('listening for requests on port 3000');

});

