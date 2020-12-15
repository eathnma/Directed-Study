// Wiggle Interaction!
// import {Draggalble} from '@shopify/draggable';

// look at increasing the quality of the sound
// https://tonejs.github.io/examples/jump

//look at frequency change
//https://tonejs.github.io/docs/14.7.58/Oscillator.html
// create a 440hz tone 
// const osc = new Tone.Oscillator(440, "sine").toDestination().start();

// detects hit detection for elements within 'clickme'.
// currently only prints when mouse is clicked
document.getElementById('clickme').onclick = function clickEvent(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var mousex = e.clientX - rect.left; //x position within the element.
    var mousey = e.clientY - rect.top;  //y position within the element.
    console.log("Left? : " + mousex + " ; Top? : " + mousey + ".");
}

var mouseIsDown = false;

document.getElementById('clickme').addEventListener('mousedown', function clickEvent(e) {
  mouseIsDown = true;

  var rect = e.target.getBoundingClientRect();
  var mousex = e.clientX - rect.left; //x position within the element.
  var mousey = e.clientY - rect.top;  //y position within the element.
  console.log("Left? : " + mousex + " ; Top? : " + mousey + ".");

  setTimeout(function() {
    if(mouseIsDown) {
      console.log("long press");
      
      var mousexMapped = mousex * 21;

      const osc = new Tone.Oscillator({
          type: "sine",
          frequency: mousexMapped,
          volume: -16
      }).toDestination().start();

    }
  }, 100);
});

window.addEventListener('mouseup', function() {
  mouseIsDown = false;
});