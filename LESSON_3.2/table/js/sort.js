'use strict';

function handleTableClick(event) {
  const target = event.target;
  if (target.tagName === 'TH') { 
    if (target.dataset.dir && target.dataset.propName === document.querySelector('table').dataset.sortBy) {
      target.dataset.dir = -target.dataset.dir; 
    } else {
      target.dataset.dir = 1;   
    }
    const field = target.dataset.propName;
    document.querySelector('table').dataset.sortBy = field;
    sortTable(field, target.dataset.dir);
  }
}

