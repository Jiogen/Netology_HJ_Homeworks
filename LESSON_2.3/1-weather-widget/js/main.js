const request = new XMLHttpRequest();
function onLoad(event) {
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    setData(response);
  }
}

request.addEventListener('load', onLoad);
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather', true);
request.send();