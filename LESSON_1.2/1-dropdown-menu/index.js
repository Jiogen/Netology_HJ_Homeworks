'use strict';
const wrapperDropdown = document.getElementsByClassName('wrapper-dropdown')[0];


//First OPTION... OMG Very simple :) 

// wrapperDropdown.onclick = function() {
//   wrapperDropdown.classList.toggle('active');
// }

//SECOND OPTION...Just for fun...

// wrapperDropdown.onclick = function() {
//   if (wrapperDropdown.classList.contains('active')) {
//     wrapperDropdown.classList.remove('active');
//   }
//   else {
//     wrapperDropdown.classList.add('active');
//   }
// };


//THIRD OPTION... Oh my gosh ... But it support IE9 ...

wrapperDropdown.onclick = function() {
  const classNames = wrapperDropdown.className.split(' ');
  const index = classNames.indexOf('active');
  if (index === -1) {
    classNames.push('active');
  } else {
    classNames.splice(index, 1);
  }

  wrapperDropdown.className = classNames.join(' ');
};