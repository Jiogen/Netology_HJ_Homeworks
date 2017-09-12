'use strict';
const contactList = [
                      {'name': 'Daniel Day-Lewis', 'email': 'daylewis@gmail.com', 'phone': '+4 981 952 60 12'}, 
                      {'name': 'Christoph Waltz', 'email': 'christoph@gmail.com', 'phone': '+6 944 1 77 60 95'}
                    ];
document.addEventListener('DOMContentLoaded', loadContacts);

function loadContacts(){
  const ulContactList = document.querySelector('.contacts-list');
  let liString = '';
  for (let i = 0; i < contactList.length; i++){
    liString += '<li data-email="' + contactList[i].email + '" ';
    liString += 'data-phone="' + contactList[i].phone + '">';
    liString += '<strong>' + contactList[i].name + '</strong></li>';
  } 
  ulContactList.innerHTML = liString;
};