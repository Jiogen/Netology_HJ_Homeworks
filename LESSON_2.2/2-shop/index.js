'use strict'

const buttons = document.querySelectorAll('button.add');
const cartCount = document.getElementById('cart-count');
const totalPrice = document.getElementById('cart-total-price');
let count = 0;
let total = 0;

function getPriceFormatted(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

function addItem(event){
  let currentElement = event.currentTarget;
  count += 1;
  cartCount.innerHTML = count;
  total += parseInt(currentElement.dataset.price);
  totalPrice.innerHTML = getPriceFormatted(total);
};

for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', addItem);
}
