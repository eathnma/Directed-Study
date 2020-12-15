const path = require('path');
const port = 2000;

var app = require('express')();
var express = require('express');

// socket.io code
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static("app"));
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.sendFile('/views/index.html',{ root: __dirname });
})

// create connection and return if user joins
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// process.env.PORT for heroku deployment
http.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});