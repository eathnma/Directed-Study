// wiggle interaction between people 

// var mouseIsDown = false;

// // create new Tone object
// const osc = new Tone.Oscillator({
//     type: "sine",
//     baseFrequency: "500",
//     volume: -16
// }).toDestination();

// document.getElementById('clickme').addEventListener('mousedown', function clickEvent(e) {
//   mouseIsDown = true;

//   // grab the x and y pos for 
//   var rect = e.target.getBoundingClientRect();
//   var mousex = e.clientX - rect.left; //x position within the element.
//   var mousey = e.clientY - rect.top;  //y position within the element.
//   console.log("Left? : " + mousex + " ; Top? : " + mousey + ".");

//   setTimeout(function() {
//     if(mouseIsDown) {
//       console.log("long press");

//       var mousexMapped = mousex * 21;

//       const shift = new Tone.FrequencyShifter(mousexMapped).toDestination();
//       osc.connect(shift);
//     }
//   }, 100);
// });

// window.addEventListener('mouseup', function() {
//   mouseIsDown = false;
//   osc.mute = true;
// });