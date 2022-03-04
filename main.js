//Adding funtionalities to item lister (adding new li, creating a deletebutton for li, and adding new button(edit) to new li 
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// Form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
// Add item
function addItem(e){
    e.preventDefault();  
    // Get input value
    var newItem = document.getElementById('item').value;
    // Create new li element
    var li = document.createElement('li');
    // Adding class
    li.className = 'list-group-item';
    //adding text node with input value
    li.appendChild(document.createTextNode(newItem));
    //adding delete button
    var deleteBtn = document.createElement('button');
    //adding edit button
    var editBtn = document.createElement('button')
    //adding classes to button
    editBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.className = 'btn btn-sm float-right';
    // Appending text node to button
    deleteBtn.appendChild(document.createTextNode('Edit')); 
    editBtn.appendChild(document.createTextNode('x'));
    // Appending button to li
    li.appendChild(deleteBtn); 
    li.appendChild(editBtn);
    // Append li to list
    itemList.appendChild(li);
  }

  //remoing items
  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
