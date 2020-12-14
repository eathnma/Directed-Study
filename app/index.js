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

// const content = require('fs').readFileSync('../index.html', 'utf8');

// const httpServer = require('http').createServer((req, res) => {
//   // serve the index.html file
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Content-Length', Buffer.byteLength(content));
//   res.end(content);
// });

// const io = require('socket.io')(httpServer);

// io.on('connection', socket => {
//   console.log('connect');
// });

// httpServer.listen(3000, () => {
//   console.log('go to http://localhost:3000');
// });

const express = require('express')
const path = require('path')
const app = express()
const port = 2000

// app.use(express.static(path.join(__dirname, "app")));
app.use(express.static("app"));
// app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile('/views/index.html',{ root: __dirname });
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})