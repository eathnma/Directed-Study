// puts listener whenever you press the keyboard
// use addEventListener, because event.keyCode is deprecated
function setMyKeyDownListener() {
    window.addEventListener(
      "keydown",
      function(event) {
          logKey(event.key);
        }
    )
}

// play synth sound
// Membrane Synth https://tonejs.github.io/docs/r12/MembraneSynth
const synth = new Tone.MembraneSynth().toMaster();
function playSynth() {
    synth.triggerAttackRelease("C3", "7n");
}

//tracks keys
function logKey (key) {
    console.log("Key pressed is: "+ key);
    
    // grab content from html
    var keyPrintElement = document.getElementById("keyPrint");
    // append string to the key tab
    keyPrintElement.insertAdjacentHTML('beforeend',key);
    playSynth();
    
}




 