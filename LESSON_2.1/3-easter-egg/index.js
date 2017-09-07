  const navigation = document.getElementsByTagName('nav')[0];
  const secretItem = document.getElementsByClassName('secret')[0];
  const secretWord = [89,84,78,74,75,74,85,66,90];

  let counter = 0;

  document.addEventListener('keydown', showMenu);
  document.addEventListener('keydown', showSecret);

  function showMenu(event) {
      if ((event.ctrlKey) && (event.altKey) && (event.code === 'KeyT')) {
          navigation.classList.toggle('visible');
    }
  };

  function showSecret(event) {
    if (event.keyCode === secretWord[counter]) {
          counter += 1;
    }
    else {
          counter = 0;
    }
    if (counter === secretWord.length) {
            secretItem.classList.add('visible');
    }
  };