'use strict';
const articles = document.querySelector('.tabs-content').children;
const tabsNav = document.querySelector('.tabs-nav');

document.addEventListener('DOMContentLoaded', function(){  
  let demoTab = document.querySelector('.tabs-nav li');
  tabsNav.removeChild(demoTab);
  for (let i = 0; i < articles.length; i++){
    let newTab = demoTab.cloneNode(true);
    newTab.firstElementChild.text = articles[i].dataset.tabTitle;
    newTab.firstElementChild.classList.add(articles[i].dataset.tabIcon);
    if (i == 0){
      newTab.classList.add('ui-tabs-active');
    }else{
      articles[i].classList.add('hidden');
    }
    tabsNav.appendChild(newTab);
  }
});

tabsNav.addEventListener('click', function(event){
  let currentTab = event.target;
  document.querySelector('.ui-tabs-active').classList.remove('ui-tabs-active');
  currentTab.parentElement.classList.add('ui-tabs-active');
  for (const article of articles){
    if (article.dataset.tabTitle == currentTab.text){
      article.classList.remove('hidden');
    }else{
      article.classList.add('hidden');
    }
  }
});