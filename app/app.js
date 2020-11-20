
require([""])

// import express, store into var
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// send string to webpage 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
  });

// make http server listen
http.listen(2000,() =>{
    console.log('listening on *:2000');
});


// // create new express object
// var server = express();
// var path = require('path');

// // configure the server to look for index.html file in p5_sketches
// server.use(express.static(path.join(__dirname, 'public')));
// server.listen(2000);

// // import library & store in var
// var socket = require('socket.io');
// var io = socket(server);

// io.socket.on('connection', newConnection); 

// function newConnection(socket){
//     console.log('new connection');s
//     console.log(socket);
// }
