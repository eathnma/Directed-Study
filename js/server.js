// import express, store into var
var express = require('express');

// create new express object
var server = express();

var path = require('path');

// configure the server to look for index.html file in p5_sketches
server.use(express.static(path.join(__dirname, 'public')));

//listen to localhost:2000
server.listen(2000);
console.log('Listening on Port 2000');

