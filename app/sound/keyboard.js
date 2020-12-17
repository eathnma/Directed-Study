'use strict';

// test import from other js files
import {Note} from '../visualization/notes.js';

// create new note object
const userNote1 = new Note ('#6FCF97',"user1");
const userNote2 = new Note ('#FF8470',"user2");
const userNote3 = new Note ('#FFBA00',"user3");
const userNote4 = new Note ('#3780F8',"user4");
const userNote5 = new Note ('#BB6BD9',"user5");

const sampler = new Tone.Sampler({
	urls: {
        A3: "../assets/audio/piano/a3.mp3",
        A4: "../assets/audio/piano/a4.mp3",
        A5: "../assets/audio/piano/a5.mp3",
	},
}).toDestination();

var chordPlayed;
var CMin7 = ["C5", "G5", "Eb5", "Bb5"];
var BMaj7 = ["B5", "Gb5", "Eb5", "Bb5"];
var BbMin7 = ["Bb5", "F5", "Db5", "Ab5"];
var AMaj7 = ["A5", "E5", "Db5", "Ab5"];
var CsMin9 = ["Db5", "B5", "Eb5", "Ab5"];

function chordRandomizer(){
    // randomize the array
    var chordArray = [CMin7, BMaj7, BbMin7, AMaj7, CsMin9];
    const randomChord = chordArray[Math.floor(Math.random() * chordArray.length)];
    setTimeout(chordRandomizer, 5000);
    chordPlayed = randomChord;
}

chordRandomizer();

// puts listener whenever you press the keyboard
window.addEventListener("keydown",
    function(event) {
        logKey(event.key);

        if(chordPlayed == null){
            lookForKeys(event, chordPlayed);
        } else {
            lookForKeys(event, chordPlayed);
        }
    }
);

function lookForKeys(event, chord){
    if(event.key == 'a'){
        sampler.triggerAttackRelease(chord[0], 1);
        // call update function from note class
        userNote1.update();
    }

    if(event.key == 's'){
        sampler.triggerAttackRelease(chord[1], 1);
        userNote2.update();
    }

    if(event.key == 'd'){
        sampler.triggerAttackRelease(chord[2], 1);
        userNote3.update();
    }
    
    if(event.key == 'f'){
        sampler.triggerAttackRelease(chord[3], 1);
        userNote4.update();
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
    // keyPrintElement.insertAdjacentHTML('beforeend',key);

}