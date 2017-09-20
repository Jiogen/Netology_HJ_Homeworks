'use strict';
let totalCount = 0;
let readyCount = 0;

const output = document.getElementsByTagName('output')[0];
const tasks = document.querySelectorAll('.list-block input');

function outputFunction(ready, total){
  output.innerHTML = ready + ' из ' + total;
  if (ready == totalCount){
    document.querySelector('.list-block').classList.add('complete');
  }else{
    document.querySelector('.list-block').classList.remove('complete');
  }
}

document.addEventListener('DOMContentLoaded', function(){
  totalCount = tasks.length;
  readyCount = document.querySelectorAll('.list-block input[checked]').length;
  outputFunction(readyCount, totalCount);
});

for (const task of tasks){
  task.addEventListener('change', function(){
    if (this.checked){
      readyCount += 1;
    }else{
      readyCount -= 1;
    }
    outputFunction(readyCount, totalCount);
  });
}