const setPlayMode = document.getElementsByClassName('set')[0];
const keys = setPlayMode.getElementsByTagName('li');

document.addEventListener('keydown', refreshMode);
document.addEventListener('keyup', defaultMode); 

function playSound(event) {
  let audio = this.getElementsByTagName('audio')[0];
  let src = audio.src;

  if (event.shiftKey) {
    src = src.replace(/higher|middle/, 'lower');
  } else if (event.altKey) {
    src = src.replace(/lower|middle/, 'higher');
  } else {
    src = src.replace(/higher|lower/, 'middle');
  }
  audio.src = src;
  audio.play();
};

function refreshMode(event) {

  if (event.shiftKey) {
    setPlayMode.classList.add('lower');
    setPlayMode.classList.remove('higher');    
  } else if (event.altKey) {
    setPlayMode.classList.add('higher');
    setPlayMode.classList.remove('lower');    
  }
};

function defaultMode(event) {
  setPlayMode.classList.remove('higher'); 
  setPlayMode.classList.remove('lower');
};

for (let key of keys) {
  key.addEventListener('click', playSound);
}
