const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  /*******************************************************/
  
  var node = document.createElement("li")
  var textnode = document.createTextNode("new item")
  var button = document.createElement("input");
  button.id = "button";
  button.type = "button";
  button.value = "Remove item";
  button.onclick = function() {
    this.parentElement.remove(this);
  }
  node.appendChild(button);
  
  //var but = document.createElement("Button")
  node.appendChild(textnode)
  //node.appendChild(but)
  document.getElementById("todo-list").appendChild(node)
  document.getElementById("item-count").innerHTML = itemCountSpan
  
  /********************************************************/
}
