// let headTitle = document.getElementById('header-title')
// let head = document.getElementById('main-header')
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

// let even = document.querySelectorAll('li:nth-child(even)')
// even[0].style.color ='green'

// let odd = document.querySelectorAll('li:nth-child(odd)')
// for(let i=0;i<odd.length;i++){


// TRAVERSING THE DOM
// let itemlist = document.querySelector('#items')
// parentNode
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor = '#f4f4f4'

// childElement
// console.log(itemlist.childNodes)
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.backgroundColor = 'pink'

// firstChild
// console.log(itemlist.firstChild)
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent = 'Hello One'
// lastchildelement
// itemlist.lastElementChild.textContent ='Hello end'

// nextSibling
// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);

// previousSibling
// console.log(itemlist.previousSibling);

// previouselementSibling
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color ='teal'

// create Element

// create a div

// let newDiv = document.createElement('div')
// add a class
// newDiv.className = 'hello'
// Add a Id
// newDiv.id = 'hello1'
// Add Title
// newDiv.setAttribute('title','Hello Div')

// create text node

// let newdivtext = document.createTextNode('hello World')
// newDiv.appendChild(newdivtext)
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1')

// console.log(newDiv)
// newDiv.style.fontSize = '30px'
// container.insertBefore(newDiv,h1)

// let form = document.getElementById('addForm');
// let itemlist = document.getElementById('items');
// itemlist.addEventListener('click',removeItem);

// form.addEventListener('submit',additem)
// function additem(e){
//     e.preventDefault();
//     // console.log('submit')
//     // Get Input Value
//     let newItem = document.getElementById('item').value
//     // create new Li Element
//     let li = document.createElement('li')
//     li.className = 'list-group-item'
//     // Add text note with input value
//     li.appendChild(document.createTextNode(newItem))
//     // create the Delete button Element
//     let deletebutton = document.createElement('button')
//     // Add class to Delete button
//     deletebutton.className ='btn btn-danger btn-sm float-right delete'
//     // Appened TextNote
//     deletebutton.appendChild(document.createTextNode('X'))
//     // Appended Detete to Li
//     li.appendChild(deletebutton)
//     itemlist.appendChild(li)
// }

// function removeItem(e){
//     e.preventDefault();
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you Sure ?')){
//             let li = e.target.parentElement;
//             itemlist.removeChild(li)
//         }
//     }
// }
let itemlist = document.getElementById('items')
let form = document.getElementById('addForm')
itemlist.addEventListener('click',removeItem)
form.addEventListener('submit',additem)
function additem(e){
    e.preventDefault();
    let inputvalue = document.getElementById('item').value
    console.log(inputvalue)
let li = document.createElement('li')
li.className = 'list-group-item'
li.appendChild(document.createTextNode(inputvalue))
let deletebtn = document.createElement('button')
deletebtn.className = 'btn btn-danger btn-sm float-right delete'
deletebtn.appendChild(document.createTextNode('X'))
let edit = document.createElement('button')
edit.className = 'btn btn-primary btn-sm float-right edit'
edit.appendChild(document.createTextNode('E'))
li.appendChild(deletebtn)
li.appendChild(edit)
itemlist.appendChild(li)
}
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement
        itemlist.removeChild(li)
    }
}