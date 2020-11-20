import Tone from 'tone';

function clickButton(){
    //attach a click listener to a play button
    const synth = new Tone.Synth();
    synth.toDestination();
    // trigger the attack immediately
    synth.triggerAttack("C4");
    // wait one second before triggering the release
    synth.triggerRelease(1);
}
 