'use strict';
const form = document.querySelector('.contentform'),
    allInputs = form.querySelectorAll('input, textarea'),
    zip = form.querySelector('input[name="zip"]'),
    submit = form.querySelector('form.contentform > button.button-contact'),
    mainOutput = document.querySelector('#output'),
    allOutputs = mainOutput.querySelectorAll('output'),
    changeButton = mainOutput.querySelector('.button-contact');

allInputs.forEach(function(elem) {
  elem.addEventListener('input', onInput);
});

zip.addEventListener('input', onZipInput);

function onInput() {
  let isEmptyInput = false;
  allInputs.forEach(function(elem) {
    if (!elem.value) {
      isEmptyInput = true;
    }
  }); 
  submit.disabled = isEmptyInput;
}

let zipOld = zip.value; 
const allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
function onZipInput(e) {
  if ([...zip.value].every(elem => allowedChars.findIndex(c => c === elem) !== -1)) {
    zipOld = zip.value;
  } else {
    zip.value = zipOld;
    if (zip.empty) {
      submit.disabled = true;
    }    
  }
}

submit.addEventListener('click', onClickSubmit);
changeButton.addEventListener('click', onClickChangeButton);

function onClickSubmit(e) {
  allOutputs.forEach(function(elem) {
    let needInput = form.querySelector(`[name="${elem.id}"]`); 
    if (needInput) {
      elem.value = needInput.value;      
    }
  });
  
  form.classList.add('hidden');
  mainOutput.classList.remove('hidden');
  e.preventDefault();
}

function onClickChangeButton(e) {
  form.classList.remove('hidden');
  mainOutput.classList.add('hidden');
  e.preventDefault();
}