'use strict';
const todoList = document.querySelector('.todo-list');
const doneList = document.querySelector('.todo-list .done');
const undoneList = document.querySelector('.todo-list .undone');
const items = document.querySelectorAll('.todo-list input');

for (let item of items){
  item.addEventListener('change', function(){     
    if (this.parentElement.parentElement.classList.contains('done')){
      if (!this.checked){
        let label = this.parentElement;
        undoneList.appendChild(label);
      }
    }else{
      if (this.checked){
        let label = this.parentElement;
        doneList.appendChild(label);
      }
    }    
  });
}
