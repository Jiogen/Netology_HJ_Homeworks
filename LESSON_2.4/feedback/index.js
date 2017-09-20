'use strict';
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
const changeButton = document.querySelector('#output .button-contact');
const contentform = document.querySelector('.contentform');
const output = document.getElementById('output');
let lastName = document.querySelector('.form-group input[name=lastname]'), 
    name = document.querySelector('.form-group input[name=name]'), 
    email = document.querySelector('.form-group input[name=email]'), 
    company = document.querySelector('.form-group input[name=company]'), 
    address = document.querySelector('.form-group input[name=address]'), 
    zip = document.querySelector('.form-group input[name=zip]'),
    city = document.querySelector('.form-group input[name=city]'),
    phone = document.querySelector('.form-group input[name=phone]'),
    role = document.querySelector('.form-group input[name=role]'),
    subject = document.querySelector('.form-group input[name=subject]'),
    message = document.querySelector('.form-group textarea[name=message]');
let fieldsReady = false;

zip.addEventListener('input', function(){
  let value = this.value; 
  let rep = /[-\.;":'a-zA-Zа-яА-Я]/; 
  if (rep.test(value)) { 
    value = value.replace(rep, ''); 
    this.value = value; 
  } 
});

function checkFields(){
  
  if (lastName.value && name.value && email.value && company.value && address.value &&
     zip.value && city.value && phone.value && role.value && subject.value && message.value) 
    fieldsReady = true;
  else 
    fieldsReady = false; 
  
  if (fieldsReady) sendButton.disabled = false;
  else sendButton.disabled = 'disabled';
}

for (let i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('input', checkFields);
}

contentform.addEventListener('submit', function(event){
  event.preventDefault();
  document.getElementById('name').value = name.value;
  document.getElementById('lastname').value = lastName.value;
  document.getElementById('company').value = company.value;  
  document.getElementById('role').value = role.value;
  document.getElementById('zip').value = zip.value;
  document.getElementById('city').value = city.value;
  document.getElementById('address').value = address.value;
  document.getElementById('subject').value = subject.value;
  document.getElementById('message').value = message.value;
  contentform.classList.add('hidden');
  output.classList.remove('hidden');
});

changeButton.addEventListener('click', function(){
  contentform.classList.remove('hidden');
  output.classList.add('hidden');
});