let form = document.getElementById('addform')
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
window.localStorage.setItem(email,userDetails)
})