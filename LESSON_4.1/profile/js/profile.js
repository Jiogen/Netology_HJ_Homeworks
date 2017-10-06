'use strict';
function loadData(url) {
  const functionName = randomName();
  return new Promise ((done, fail) => {
    window[functionName] = done;
    const script = document.createElement('script');
    script.src = `${url}?jsonp=${functionName}`;
    document.body.appendChild(script);
  });
};

function showProfile(data) {
  document.querySelector('[data-name]')       .innerHTML  = data.name;
  document.querySelector('[data-description]').innerHTML  = data.description;
  document.querySelector('[data-position]')   .innerHTML  = data.position;
  document.querySelector('[data-pic]')        .src        = data.pic;
}


function showTech(data) {
  document.querySelector('[data-technologies]').innerHTML = getAllTech(data);
  document.querySelector('.content').style.display = 'initial';
}
  
function snippetTech(nameTech) {
  return `<span class="devicons devicons-${nameTech}"></span>`;
}
  
function getAllTech(data) {
  return data.reduce(function(summary, current) {
    return summary + snippetTech(current);
  }, '');
}
  

loadData('https://neto-api.herokuapp.com/profile/me')
  .then(data => {
    showProfile(data);
    return data.id;
  })
  .then(id => {
    loadData(`https://neto-api.herokuapp.com/profile/${id}/technologies`)
      .then(showTech)
  })

function randomName() {
  return 'callback' + Math.round(10000 * Math.random());
};