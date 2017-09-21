'use strict';
let prevButton = document.querySelector('a[data-action="prev"]');
let nextButton = document.querySelector('a[data-action="next"]');
let firstButton = document.querySelector('a[data-action="first"]');
let lastButton = document.querySelector('a[data-action="last"]');

let mainSlider = document.querySelector('main.slider');
let containerSlides = mainSlider.querySelector('ul.slides');
let listSlides = document.querySelectorAll('ul.slides > li.slide');
let activeSlide = containerSlides.firstElementChild;

init();

function updateGUI() {
  prevButton.classList.toggle('disabled', activeSlide.previousElementSibling === null);
  nextButton.classList.toggle('disabled', activeSlide.nextElementSibling === null);
  firstButton.classList.toggle('disabled', activeSlide === containerSlides.firstElementChild);
  lastButton.classList.toggle('disabled', activeSlide === containerSlides.lastElementChild);
}

function moveYourSlide(oper) {
  if (!oper) {
    return false;
  }
  
  let nextSlide = null;
  if (oper === '-1') {nextSlide = activeSlide.previousElementSibling; }
  if (oper === '1') {nextSlide = activeSlide.nextElementSibling;}
  if (oper === 'first') {nextSlide = containerSlides.firstElementChild;}
  if (oper === 'last') {nextSlide = containerSlides.lastElementChild;}
    
  if (nextSlide === null || activeSlide === nextSlide) {
    return false;
  }
  
  let classActive = containerSlides.querySelector('.slide-current');
  classActive.classList.remove('slide-current');
  activeSlide = nextSlide;
  activeSlide.classList.add('slide-current');
  let img = activeSlide.querySelector('img');
  updateGUI();
}
function init() {
  activeSlide.classList.add('slide-current')
  updateGUI();
}
prevButton.addEventListener('click', () => moveYourSlide('-1'));
nextButton.addEventListener('click', () => moveYourSlide('1'));
firstButton.addEventListener('click', () => moveYourSlide('first'));
lastButton.addEventListener('click', () => moveYourSlide('last'));
