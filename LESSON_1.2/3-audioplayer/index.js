'use strict';
const mediaPlayer = document.getElementsByClassName('mediaplayer')[0];
const audio = document.getElementsByTagName('audio')[0];
const playState = document.getElementsByClassName('playstate')[0];

const btnPlay = playState.getElementsByClassName('fa-play')[0];
const btnPause = playState.getElementsByClassName('fa-pause')[0];
const btnStop = document.getElementsByClassName('stop')[0];
const btnNext = document.getElementsByClassName('next')[0];
const btnBack = document.getElementsByClassName('back')[0];

const title = document.getElementsByClassName('title')[0];

const musicArray = ['mp3/la_chill_tour.mp3', 'mp3/la_fusion_jam.mp3', 'mp3/this_is_it_band.mp3'];

let musicStep = 0;
let musicEx = /[_/,.]/g;

function visualPlay() {
  mediaPlayer.classList.toggle('play');
};

btnPlay.onclick = function() {
  visualPlay();
  audio.play();
};

btnPause.onclick = function() {
  visualPlay();
  audio.pause();
};

btnStop.onclick = function() {
  if (mediaPlayer.classList.contains('play')) {
    visualPlay();
  };
  audio.pause();
  audio.currentTime = 0;
};

btnNext.onclick = function() {
  musicStep += 1;

  if (musicStep >= musicArray.length) {
    musicStep = 0;
  }

  if (!(mediaPlayer.classList.contains('play'))) {
    visualPlay();
  };

  audio.src = musicArray[musicStep];
  audio.play();
  title.title = musicArray[musicStep].split('mp3').toString().toUpperCase().replace(musicEx , ' ');
};

btnBack.onclick = function() {
  musicStep -= 1;
  if (musicStep < 0) {
    musicStep = musicArray.length -1;
  };

  if (musicStep >= musicArray.length) {
    musicStep = 0;
  }
  if (!(mediaPlayer.classList.contains('play'))) {
    visualPlay();
  };
  
  audio.src = musicArray[musicStep];
  audio.play();
  title.title = musicArray[musicStep].split('mp3').toString().toUpperCase().replace(musicEx , ' ');
};