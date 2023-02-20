let form = document.getElementById('my-form')
form.addEventListener('submit',addUser=(e)=>{
    e.preventDefault();
    console.log('click')
    let name = document.getElementById('name').value 
    let email = document.getElementById('email').value
    window.localStorage.setItem('userDetails',`name: ${name} email: ${email}`)
})