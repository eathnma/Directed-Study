export{Person};

import {Note} from '../visualization/notes.js';

class Person{
    constructor(username, image="../assets/img/Edith.png", color="#000"){
        this.username = username;
        this.image = image;
        this.color = color;
    }

    update(){
        this.setup();
        this.sound();
    }

    setup(){
        // color will be a hex value string
        const userList = document.getElementById("user-list");

        const checkUsername = document.getElementById(this.username)
        if(!checkUsername){
            var userInfo = document.createElement('div');
            userInfo.setAttribute('id', this.username);
            
            userInfo.innerHTML =
            `<div id="${this.username}"></div>
            <img id="clickme" src="${this.image}" alt="no-image">
            <h6 style="text-align: center;">${this.username}</h6>`;
    
            userList.appendChild(userInfo);  
        } 
    }

    sound(){
        const userNote = new Note (this.color, this.username);
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
            return randomChord;
        }
        
        // call button function
        document.getElementById("button").addEventListener("click", function(){
            
            // return random array when button is clicked
            chordPlayed = chordRandomizer();
        
            console.log("button pressed");
        });
        
        // puts listener whenever you press the keyboard
        window.addEventListener("keydown",
            function(event) {
                logKey(event.key);
        
                if(chordPlayed == null){
                    lookForKeys(event, CMin7);
                } else {
                    lookForKeys(event, chordPlayed);
                }
                
                console.log(chordPlayed);
            }
        );
        
        function lookForKeys(event, chord){
            if(event.key == 'a'){
                sampler.triggerAttackRelease(chord[0], 1);
                // call update function from note class
                userNote.update();
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
            // keyPrintElement.insertAdjacentHTML('beforeend',key);
        }
    }
}