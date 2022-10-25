function addFunction() {
  if(document.querySelector('#input').value.length == 0)
    alert("Please enter an item")
  else {
    //creating one item in the list
    let item = document.createElement('div');
    item.className = "item";
    let itemText = document.createElement('div');
    itemText.className = "item-text";
    itemText.innerText = document.querySelector('#input').value;
    let itemButton = document.createElement('button');
    itemButton.className = "item-button";
    itemButton.innerHTML = '<i class="fa fa-trash-o"></i>'
    let container = document.querySelector('.container');
    container.appendChild(item);
    item.appendChild(itemText);
    item.appendChild(itemButton);
    //checking whether a product has been deleted from the list
    var currentTasks = document.querySelectorAll(".item-button");
    for(var i=0; i<currentTasks.length; i++) {
      currentTasks[i].onclick = function() {
        this.parentNode.remove();
      }
    }
  }
}