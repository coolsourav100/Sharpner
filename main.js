let form = document.getElementById('addform')
let list = document.getElementById('list')
form.addEventListener('submit',add=(e)=>{
    e.preventDefault()
 let name = document.getElementById('name').value 
 let email = document.getElementById('email').value
 let phone = document.getElementById('phone').value
 console.log(name , email , phone)
 let user = {
    'name' : name ,
    'email' : email,
    'phone' : phone
 }
let userDetails = JSON.stringify(user)
window.localStorage.setItem(phone,userDetails)
// console.log(list)
let deletebtn = document.createElement('button')
deletebtn.className = 'btn btn-danger btn-sm float-right delete'
deletebtn.appendChild(document.createTextNode('Delete'))
let listitem = document.createElement('li')
listitem.append(document.createTextNode(`Name : ${name} Email:${email} Phone:${phone}`))
listitem.appendChild(deletebtn)
list.appendChild(listitem)
})

 list.addEventListener('click',remove=(e)=>{
    e.preventDefault()
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement
        let ph = li.innerHTML.toString().split('Phone')[1].slice(1,11)
        list.removeChild(li)
        window.localStorage.removeItem(ph)
        console.log(ph)
        
    }
    // console.log(e.target.)
 })