'use strict';
function loadData(url) {
  const functionName = randomName();
  return new Promise ((done, fail) =>{
    window[functionName] = done;
    const script = document.createElement('script');
    script.src = `${url}?jsonp=${functionName}`;
    document.body.appendChild(script);
  });
};

function showData(data) {
  document.querySelector('[data-title]')      .innerHTML  = data.title;
  document.querySelector('[data-ingredients]').innerHTML  = data.ingredients.join(',');
  document.querySelector('[data-pic]').style.backgroundImage = `url('${data.pic}')`;
}

function russianOtsenok(count) {
  if (count > 10 && count < 20) { 
    return 'оценок';
  }
  
  const lastDigit = count % 10;
  
  if (lastDigit == 1) {
    return 'оценка';
  }
  
  if (lastDigit > 1 && lastDigit < 5) {
    return 'оценки';
  }
  
  return 'оценок';
}

function showRating(data) {
  document.querySelector('[data-rating]') .innerHTML  = data.rating.toFixed(2);
  document.querySelector('[data-votes]')  .innerHTML  = `(${data.votes} ${russianOtsenok(data.votes)} )`;
  document.querySelector('[data-star]').style.width  = `${data.rating * 10}%`;
}

function snippetConsumer(data) {
  return `<img src="${data.pic}" title="${data.name}">`;
}

function get4Consumers(data) {
  return data.reduce(function(summary, current) {
    return summary + snippetConsumer(current);
  }, '');
}

function showConsumers(data) {
  document.querySelector('[data-consumers]').innerHTML  = `${get4Consumers(data.consumers)}<span>+${data.total-data.consumers.length}</span>`;
}

const id = 42;

loadData(`https://neto-api.herokuapp.com/food/${id}`)
  .then(showData);
loadData(`https://neto-api.herokuapp.com/food/${id}/rating`)
  .then(showRating);
loadData(`https://neto-api.herokuapp.com/food/${id}/consumers`)
  .then(showConsumers);

function randomName() {
  return 'callback' + Math.round(10000 * Math.random());
};