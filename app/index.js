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

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

let numUsers = 0;

// create connection and return if user joins
io.on('connection', (socket) => {

  // let addedUser = false;
  socket.on('new message',(data) => {
      socket.broadcast.emit('new message', {
        username: socket.username,
        message: data
      });
  });

  // Welcome Current User
  socket.emit('message', 'Welcome to the Room!');

  // Broadcast when a user connects
  socket.broadcast.emit('message', 'A user has joined the chat');

  // Runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });
    
  // // Broadcast to everybody
  // io.emit();

  socket.on('',() => {
    

  });

    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

});



// process.env.PORT for heroku deployment
http.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});