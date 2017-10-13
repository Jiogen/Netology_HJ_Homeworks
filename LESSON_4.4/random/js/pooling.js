'use strict';

const xhr =  new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();
let websocket = null;
const poolingBlock = document.querySelector('section.pooling');
const longPoolingBlock = document.querySelector('section.long-pooling');
const websocketBlock = document.querySelector('section.websocket');
let poolingInterval = 5000;

init();

function onError(event) {
  console.log(event.target, 'Произошел сбой');
  if (event.target == xhr) {
    console.log('Увеличиваем интервал между запросами до 20 секунд');
    poolingInterval = 20000;
  }
  if (event.target == xhr2) {
    console.log('Через 10 секунд повторный запрос длинных запросов');
    setTimeout(longPooling, 10000);
  }
}

function pooling() {
  xhr.open("GET", 'https://neto-api.herokuapp.com/comet/pooling', true);
  xhr.send();
  setTimeout(pooling, poolingInterval);
}

function init() {
  xhr.addEventListener('load', (event) => {
    if (poolingInterval >= 10000) {
      console.log('Восстанавливаем интервал для частых запросов 5 секунд')
      poolingInterval = 5000;
    }
    console.log('pooling: '+ xhr.responseText.trim());
    selectNumber(poolingBlock, xhr.responseText);
  });

  xhr2.addEventListener('load', (event) => {
    console.log('long-pooling: '+ xhr2.responseText.trim());
    selectNumber(longPoolingBlock, xhr2.responseText.trim());
    longPooling();
  });

  xhr.addEventListener('error', onError);
  xhr2.addEventListener('error', onError);
  websocketInit();
  
  pooling();
  longPooling();
}
