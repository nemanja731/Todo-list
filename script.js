function addFunction() {
  if (document.querySelector('#input').value.length == 0) {
    alert("Please enter an item");
    return;
  }
  var li = document.createElement('li');
  var text = document.createTextNode(document.querySelector('#input').value);
  li.appendChild(text);
  document.querySelector('ul').appendChild(li);
  document.querySelector('#input').value = '';
  var close = document.createElement('div');
  close.className = 'close';
  close.innerHTML = '<div class="fa fa-trash-o"></div>';
  li.appendChild(close);
  // toggle checkmark 
  li.addEventListener('click', checkFunction);
  // delete element of list
  close.addEventListener('click', removeFunction);
}

function checkFunction(ev) {
  ev.target.classList.toggle('checked');
}

function removeFunction() {
  this.parentNode.remove();
}
