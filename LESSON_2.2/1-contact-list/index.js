'use strict';
var contacts = loadContacts();
contacts = JSON.parse(contacts);
var contactsList = document.querySelector('.contacts-list');
var li = contacts.reduce(function(prev, elem) {
  console.log(prev)
  return `${prev}<li data-email="${elem.email}" data-phone="${elem.phone}"><strong>${elem.name}</strong></li>`;
}, '');
contactsList.innerHTML = li;