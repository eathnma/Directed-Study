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
// const synth = new Tone.MembraneSynth().toMaster();
// const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();

const sampler = new Tone.Sampler({
	urls: {
        A1: "A1.mp3",
		A2: "A2.mp3",
	},
	baseUrl: "https://tonejs.github.io/audio/casio/",
}).toDestination();

const synth = new Tone.Synth().toDestination();

function playSynth() {
    sampler.triggerAttackRelease(["C1", "G1", "Eb1", "Bb1"], 4);
}

window.addEventListener('click');

//tracks keys
function logKey (key) {
    console.log("Key pressed is: "+ key);
    
    // grab content from html
    var keyPrintElement = document.getElementById("keyPrint");
    // append string to the key tab
    keyPrintElement.insertAdjacentHTML('beforeend',key);
    playSynth();
    
}

// for when we need to load items 
try{

}
catch(err){

}




 