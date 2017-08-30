"use strict";
const gallerySlider = document.getElementById('slider');
const imgArray = ['i/airmax.png', 
                  'i/airmax-jump.png',
                  'i/airmax-on-foot.png', 
                  'i/airmax-playground.png',
                  'i/airmax-top-view.png', 
                  'i/spinner.gif'
                  ];
let step = 0;

function changePic() {
  gallerySlider.src = imgArray[step];
  step++;
  if (step === imgArray.length - 1) {
      step = 0;
  }
}

setInterval(changePic, 5000);