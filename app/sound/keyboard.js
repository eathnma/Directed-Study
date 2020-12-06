// https://devriffs.com/simple-tonejs-keyboard/
// https://requirejs.org/

const sampler = new Tone.Sampler({
	urls: {
        A3: "audio/piano/a3.mp3",
        A4: "audio/piano/a4.mp3",
        A5: "audio/piano/a5.mp3",
	},
}).toDestination();

var chordPlayed;
var CMin7 = ["C5", "G5", "Eb5", "Bb5"];
var BMaj7 = ["B5", "Gb5", "Eb5", "Bb6"];
var BbMin7 = ["Bb5", "F5", "Db5", "Ab5"];
var AMaj7 = ["A5", "E5", "Db5", "Ab6"];
var CsMin9 = ["Db5", "B5", "Eb5", "Ab6"];

function chordRandomizer(){
    // randomize the array
    var chordArray = [CMin7, BMaj7, BbMin7, AMaj7, CsMin9];
    const randomChord = chordArray[Math.floor(Math.random() * chordArray.length)];
    return randomChord;
}

function buttonPressed(){
    chordPlayed = chordRandomizer();
}

// puts listener whenever you press the keyboard
function onKeyDown(chord){
window.addEventListener("keydown",
    function(event) {
        logKey(event.key);
        console.log(chordPlayed);
        lookForKeys(event, chordPlayed);
    }
    );
}

function lookForKeys(event, chord){
    if(event.key == 'a'){
        console.log("trya");
        sampler.triggerAttackRelease(chord[0], 1);
    }

    if(event.key == 's'){
        sampler.triggerAttackRelease(chord[1], 1);
    }

    if(event.key == 'd'){
        sampler.triggerAttackRelease(chord[2], 1);
    }
    
    if(event.key == 'f'){
        sampler.triggerAttackRelease(chord[3], 1);
    }
    
    // if(event.key == 'g'){
    //     sampler.triggerAttackRelease(chord[4], 1);
    // }
}

// window.addEventListener('click');

function logKey (key) {
    console.log("Key pressed is: "+ key);
    
    // grab content from html
    var keyPrintElement = document.getElementById("keyPrint");
    // append string to the key tab
    keyPrintElement.insertAdjacentHTML('beforeend',key);

}