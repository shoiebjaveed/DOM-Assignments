//console.log("Hello");
//adding boder to Header
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

//changing Add Item to Bold and color as green
 var title = document.getElementById('addItem');
 title.style.fontWeight = 'bold';
 title.style.color = 'green';


// chnaging 3 rd element in the list have green background color
// changing all the elements in the list have bold and background color 
const item = document.getElementsByClassName('list-group-item');
for(let i = 0; i < item.length; i++ ){
    item[i].style.fontWeight = 'bold';
    item[i].style.backgroundColor = '#f4f4f4';
}
item[2].style.backgroundColor = 'green';

//new li element without the same class Name And try editing it with getelementsbyclassname and then by getelementbytagname
const li = document.getElementsByClassName('list-group-item');
// for(let i = 0; i < item.length; i++ ){
//     item[i].style.fontWeight = 'bold';
//     item[i].style.backgroundColor = '#f4f4f4';

// }

const li = document.getElementsByTagName('li');
for(let i = 0; i < li.length; i++ ){
    li[i].style.fontWeight = 'bold';
    li[i].style.backgroundColor = 'yellow';
    
    }
//Target elements by querySelector
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';
// var tItem = document.querySelector('.list-group-item:nth-child(3)'); 
// tItem.textContent = "";

//Target elements by querySelectorAll
var even= document.querySelectorAll('li:nth-child(even)');
even[0].style.color = "green";
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++){
       odd[i].style.backgroundColor = 'green';
     }

//-------------------------------------------------------------------------------------------------
//manipulating the DOM
//var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement
// adding HEllo word before Item Lister
// Create a div
var newDiv =  document.createElement('div');

// Add class
newDiv.className= 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello');

// Add text to div
 newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);


// adding HEllo word before Item 1
var itemList = document.querySelector('#items')
itemList.previousElementSibling.textContent = 'Hello';




