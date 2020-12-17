const path = require('path');
const port = 2000;

const app = require('express')();
const express = require('express');

// socket.io code
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static("app"));
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.sendFile('/views/index.html',{ root: __dirname });
})

let numUsers = 0;

// create connection and return if user joins
io.on('connection', (socket) => {

  // Welcome Current User
  // socket.emit('message', 'Welcome to the Room!');

  // Broadcast when a user connects
  // socket.broadcast.emit('message', 'A user has joined the chat');

  // Runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });

  socket.on('chatMessage', (usernameInput) => {
    // write username to the server
    io.emit('usermessage', usernameInput);
    console.log(usernameInput);
  });
    
  // // Broadcast to everybody
  // io.emit();


    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

});

// process.env.PORT for heroku deployment
http.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});