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
