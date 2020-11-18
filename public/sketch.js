var socket;

function setup() {
  createCanvas(400, 400);

  socket = socket.io.connect('http//localhost:2000');
}

function draw() {
  background(51);
  ellipse(mouseX, mouseY, 60, 60);
}
