console.log("main.js loaded");
import {Person} from '/personFolder/person.js';

// initalize variables to pass in to server
var usernameInput;

var userForm = document.getElementById('user-form');

// initalize socket object
var socket = io();

if(userForm){
// Grabbing username after submit button is pressed
  userForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      // grab their username
      usernameInput = document.getElementById('username').value;
      const person = new Person(usernameInput)

      // emitting username to server
      socket.emit('chatMessage', usernameInput);
      socket.emit('person', person);
  });
}

// grab message from socket & display 
socket.on('usermessage', username => {
  console.log(username);
  localStorage.setItem("username", username);

  showUsername(username);
});

socket.on('personOutput', userArray => {
  console.log(userArray);
  userArray.map(person => {
    const newPerson = new Person(person.username, person.image, person.color);
    console.log(usernameInput, person.username);
    if(usernameInput === person.username){
      newPerson.update();
    }else{
      newPerson.setup();
    }
  });
});

socket.on('removePerson', person =>{
  document.getElementById(person.username).remove();
});

function showUsername(username){
  console.log(username);
  document.getElementById("displayUsername").innerHTML = username + ' has joined the room';
}