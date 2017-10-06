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

function showProfile(data) {
  document.querySelector('[data-username]')   .innerHTML  = data.username;
  document.querySelector('[data-description]').innerHTML  = data.description;
  document.querySelector('[data-tweets]')     .innerHTML  = data.tweets;
  document.querySelector('[data-followers]')  .innerHTML  = data.followers;
  document.querySelector('[data-following]')  .innerHTML  = data.following;
  document.querySelector('[data-pic]')        .src        = data.pic;
  document.querySelector('[data-wallpaper]')  .src        = data.wallpaper;
}

loadData('https://neto-api.herokuapp.com/twitter/jsonp')
  .then(showProfile);

function randomName() {
  return 'callback' + Math.round(10000 * Math.random());
};