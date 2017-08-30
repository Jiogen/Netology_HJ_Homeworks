"use strict";
const currentPhoto = document.getElementById('currentPhoto');
const nextPhoto = document.getElementById('nextPhoto');
const prevPhoto = document.getElementById('prevPhoto');
const imgArray = [
                  'i/breuer-building.jpg',
                  'i/guggenheim-museum.jpg',
                  'i/headquarters.jpg',
                  'i/IAC.jpg',
                  'i/new-museum.jpg'
                  ];
let step = 0;

nextPhoto.onclick = function () {
  currentPhoto.src = imgArray[step];
  step++;
  if (step > imgArray.length - 1) {
    step = 0;
  }
};

prevPhoto.onclick = function () {
  currentPhoto.src = imgArray[step];
  step--;
if (step < 0) {
  step = imgArray.length - 1;
  }
};