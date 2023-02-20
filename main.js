let form = document.getElementById('my-form')
form.addEventListener('submit',addUser=(e)=>{
    e.preventDefault();
    // console.log('click')
    let name1 = document.getElementById('name').value 
    let email1 = document.getElementById('email').value
    let userDetails = {
        'name' : name1,
        'email' : email1
    }
    localStorage.setItem('userDetails',JSON.stringify(userDetails))
    console.log(email1)
})