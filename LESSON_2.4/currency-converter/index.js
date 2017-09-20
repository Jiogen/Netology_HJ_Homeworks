'use strict';

const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const content = document.getElementById('content');
const loader = document.getElementById('loader');
const source = document.getElementById('source');
const result = document.getElementById('result');
const xhr = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', function(){ loader.classList.remove('hidden'); });

xhr.addEventListener('load', onLoad);
xhr.open('GET', 'https://neto-api.herokuapp.com/currency', true);
xhr.send();

function onLoad() {
  let data = JSON.parse(xhr.responseText);
  let fromToOption = "";
  for (let item of data){
    fromToOption += '<option value="' + item.value + '" data-code="' + item.code + '">' + item.code + '</option>';
  }
  fromSelect.innerHTML = fromToOption;
  toSelect.innerHTML = fromToOption;
  content.classList.remove('hidden');
  loader.classList.add('hidden');
}

function convert(){
  let amount = 0;
  if (fromSelect.dataset.code == "RUR"){
    amount = parseFloat(source.value) / parseFloat(toSelect.value);
  }else{
    amount = parseFloat(source.value) / (parseFloat(toSelect.value)) * (parseFloat(fromSelect.value));
  }
  result.value = amount.toFixed(2);
}

fromSelect.addEventListener('change', convert);
toSelect.addEventListener('change', convert);
source.addEventListener('input', convert);