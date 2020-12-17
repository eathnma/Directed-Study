
// create new window onclick 
if(document.getElementById("smallWindow")){
  document.getElementById("smallWindow").addEventListener("click", function(){
    var newWin = window.open('/views/max.html', 'example', 'width=350,height=562');
    
    console.log("button pressed");
  });
}

// initalize variables to pass in to server
var window = window;
var usernameInput = document.getElementById('username');

var userForm = document.getElementById('user-form');

// initalize socket object
var socket = io();

if(userForm){
// Grabbing username after submit button is pressed
  userForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      var usernameInput = document.getElementById('username').value;

      // emitting username to server
      socket.emit('chatMessage', usernameInput);
  });
}

// grab message from socket & display 
socket.on('usermessage', username => {
  console.log(username);
  localStorage.setItem("username", username);

  showUsername(username);
});

function showUsername(username){
  console.log(username);
  document.getElementById("displayUsername").innerHTML = username + ' has joined the room';
}