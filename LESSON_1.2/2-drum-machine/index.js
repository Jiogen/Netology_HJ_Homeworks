'use strict';
const drumKit = document.getElementsByClassName('drum-kit')[0];

const drumClap = drumKit.getElementsByClassName('key-clap')[0];
const drumHihat = drumKit.getElementsByClassName('key-hihat')[0];
const drumKick = drumKit.getElementsByClassName('key-kick')[0];
const drumOpenhat = drumKit.getElementsByClassName('key-openhat')[0];
const drumBoom = drumKit.getElementsByClassName('key-boom')[0];
const drumRide = drumKit.getElementsByClassName('key-ride')[0];

const soundArray = [];

soundArray.push(drumRide, drumBoom, drumOpenhat, drumKick, drumHihat, drumClap);

for (let i = 0; i < soundArray.length; i++) {
  soundArray[i].onclick = playSound;
}

function playSound() {
  this.getElementsByTagName('audio')[0].play();
};