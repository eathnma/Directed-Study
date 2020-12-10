// IMPLEMENTATION ONE
// import express, store into var
// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// // send string to webpage 
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         io.emit('chat message', msg);
//       });
//   });

// // make http server listen
// http.listen(2000,() =>{
//     console.log('listening on *:2000');
// });

const content = require('fs').readFileSync('../index.html', 'utf8');

const httpServer = require('http').createServer((req, res) => {
  // serve the index.html file
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(content));
  res.end(content);
});

const io = require('socket.io')(httpServer);

io.on('connection', socket => {
  console.log('connect');
});

httpServer.listen(3000, () => {
  console.log('go to http://localhost:3000');
});