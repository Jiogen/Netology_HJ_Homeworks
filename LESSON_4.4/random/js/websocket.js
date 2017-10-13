'use strict';

function websocketInit() {
  if (websocket) return false;
  websocket = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
  websocket.addEventListener('error', (event) => {
    console.log('WebSocket: Сбой, попытка подключения через 10 секунд');
    websocket = null;
    setTimeout(websocketInit, 10000);
  });
  
  websocket.addEventListener('message', (event) => {
    console.log('websocket: ' + event.data);
    selectNumber(websocketBlock, event.data);
  });
  websocket.addEventListener('close', (event) => {
    websocket = null;
    console.log(`WebSocket: Соединение закрыто ${event.wasClean?'нормально ':'с ошибкой'}, попытка подключения через 10 секунд`);
    setTimeout(websocketInit, 10000);
  });
}