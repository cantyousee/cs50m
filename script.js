const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
itemCountSpan.value = 0
uncheckedCountSpan.value = 0
function newTodo() {
  /*******************************************************/
  itemCountSpan.value++
  uncheckedCountSpan.value++
  var node = document.createElement("li")
  var textnode = document.createTextNode("new item")
  var button = document.createElement("input");
  var cb = document.createElement("input");
  cb.type = "checkbox"
  cb.onclick = function(){
  	if(cb.checked === true){
  		uncheckedCountSpan.value--
  		 document.getElementById("unchecked-count").innerHTML = uncheckedCountSpan.value
  	}
  	else{
  		uncheckedCountSpan.value++
  		 document.getElementById("unchecked-count").innerHTML = uncheckedCountSpan.value
  	}
  }
  
  button.id = "button";
  button.type = "button";
  button.value = "Remove item";
  button.onclick = function() {
    this.parentElement.remove(this);
    itemCountSpan.value--
    document.getElementById("item-count").innerHTML = itemCountSpan.value
    document.getElementById("unchecked-count").innerHTML = uncheckedCountSpan.value
  }
  node.appendChild(button);
  
  //var but = document.createElement("Button")
  node.appendChild(textnode)
  node.appendChild(cb)
  document.getElementById("todo-list").appendChild(node)
  document.getElementById("item-count").innerHTML = itemCountSpan.value
  
  /********************************************************/
}
