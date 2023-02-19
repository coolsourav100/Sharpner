let headTitle = document.getElementById('header-title')
let head = document.getElementById('main-header')
let item = document.getElementById('add-item')
head.style.borderBottom = '3px solid black'
// item.style.color ='green'
// item.style.fontWeight ='bold'
let items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green'
for(let i =0 ; i<items.length;i++){
  items[i].style.fontWeight = 'bold'
}