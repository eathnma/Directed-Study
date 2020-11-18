// import express, store into var
var express = require('express');

// create new express object
var server = express();
var path = require('path');

// configure the server to look for index.html file in p5_sketches
server.use(express.static(path.join(__dirname, 'public')));
server.listen(2000);
console.log('Listening on Port 2000');

// import library & store in var
var http = require('http');
var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection); 

function newConnection(socket){
    // console.log(socket);
}
