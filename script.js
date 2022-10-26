function addFunction() {
  if(document.querySelector('#input').value.length == 0) {
    alert("Please enter an item");
    return;
  }
  //creating one item in the list
  let item = document.createElement('div');
  item.className = "item";
  let itemText = document.createElement('div');
  itemText.className = "item-text";
  itemText.innerText = document.querySelector('#input').value;
  let itemButton = document.createElement('button');
  itemButton.className = "item-button";
  itemButton.innerHTML = '<i class="fa fa-trash-o"></i>'
  itemButton.addEventListener("click", removeFunction);
  let container = document.querySelector('.container');
  container.appendChild(item);
  item.appendChild(itemText);
  item.appendChild(itemButton);
}

function removeFunction() {
  this.parentNode.remove();
}