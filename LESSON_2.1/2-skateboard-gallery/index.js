'use strict';
const gallery = document.getElementsByClassName('gallery-nav')[0];
const tagsA = gallery.getElementsByTagName('a');
const mainView = document.getElementById('view');

function showSkate(event) {
  event.preventDefault();
  gallery.getElementsByClassName('gallery-current')[0].classList.remove('gallery-current');
  event.currentTarget.classList.add('gallery-current');
  mainView.src = event.currentTarget.href;
};

for (const tag of tagsA) {
  tag.addEventListener('click', showSkate);
};