'use strict';

function longPooling() {
  xhr2.open("GET", 'https://neto-api.herokuapp.com/comet/long-pooling', true);
  xhr2.send();
}

function selectNumber(container, number) {
  Array.from(container.querySelectorAll('div')).forEach((data) => {
    data.classList.toggle('flip-it', number == data.innerText);
  });
}
