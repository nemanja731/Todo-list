function addFunction() {
  if(document.querySelector('#input').value.length == 0)
    alert("Please enter an item")
  else {
    document.querySelector('.container').innerHTML += `
    <div class="item">
      <div class="item-text">
        ${document.querySelector('#input').value}
      </div>
      <button class="item-button">
        <i class="fa fa-trash-o" style="font-size:20px"></i>
      </button>
    </div>`;
    var currentTasks = document.querySelectorAll(".item-button");
    for(var i=0; i<currentTasks.length; i++) {
      currentTasks[i].onclick = function() {
        this.parentNode.remove();
      }
    }
  }
}