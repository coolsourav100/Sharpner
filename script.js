let headTitle = document.getElementById('header-title')
let head = document.getElementById('main-header')
// let item = document.getElementById('add-item')
// head.style.borderBottom = '3px solid black'
// item.style.color ='green'
// item.style.fontWeight ='bold'
// let items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green'
// for(let i =0 ; i<items.length;i++){
//   items[i].style.fontWeight = 'bold'
// }
// let item1 = document.getElementsByClassName('list-group-item')
// for(let i=0;i<item1.length;i++){
//   item1[i].style.fontWeight ='bold'
// }
// let items = document.getElementsByTagName('li')
// for(let i =0 ; i<items.length;i++){
//   items[i].style.color = 'blue'
// }

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc'

// let input = document.querySelector('input');
// input.value = 'Hello World'
// let submit = document.querySelector("input[type='submit']")
// submit.value = 'Send'

// // let item = document.querySelector('.list-group-item');
// // item.style.color ='red'

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color ='blue'
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.backgroundColor ='green'
// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color ='transparent';

// let titles = document.querySelectorAll('.title');

let even = document.querySelectorAll('li:nth-child(even)')
even[0].style.color ='green'

let odd = document.querySelectorAll('li:nth-child(odd)')
for(let i=0;i<odd.length;i++){
  odd[i].style.background ='green'
}