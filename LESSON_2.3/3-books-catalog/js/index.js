'use strict';
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-fbb-store-api.herokuapp.com/book/', true);
xhr.send();
xhr.addEventListener("load", onLoad);

function onLoad() {
  const response = JSON.parse(xhr.responseText);
  const bookList = document.getElementById('content');
  let liString = response.reduce(function(str, current) {
    return str + '<li data-title="' + current.title + '" ' +
      'data-author="' + current.author.name + '" ' +
      'data-info="' + current.description + '" ' +
      'data-price="' + current.price + '">' +
      '<img src="' + current.cover.small + '"></li>';
  }, '');
  bookList.innerHTML = liString;
};