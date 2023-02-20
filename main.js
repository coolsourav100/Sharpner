let form = document.getElementById('addform')
// form.addEventListener('submit',add=(e)=>{
    //     e.preventDefault()
    //  console.log(name , email , phone)
    //  let user = {
        //     'name' : name ,
        //     'email' : email,
        //     'phone' : phone
        //  }
        // let userDetails = JSON.stringify(user)
        // window.localStorage.setItem(phone,userDetails)
        // // console.log(list)
        // let deletebtn = document.createElement('button')
        // deletebtn.className = 'btn btn-danger btn-sm float-right delete'
        // deletebtn.appendChild(document.createTextNode('Delete'))
        // let listitem = document.createElement('li')
        // listitem.append(document.createTextNode(`Name : ${name} Email:${email} Phone:${phone}`))
        // listitem.appendChild(deletebtn)
        // list.appendChild(listitem)
        // })
        
        //  list.addEventListener('click',remove=(e)=>{
            //     e.preventDefault()
            //     if(e.target.classList.contains('delete')){
                //         let li = e.target.parentElement
                //         let ph = li.innerHTML.toString().split('Phone')[1].slice(1,11)
    //         list.removeChild(li)
    //         window.localStorage.removeItem(ph)
    //         console.log(ph)
    
    //     }
    //     // console.log(e.target.)
    //  })
    form.addEventListener('submit',addData=(e)=>{
        e.preventDefault();
        let name  = document.getElementById('name').value 
        let email = document.getElementById('email').value
        let phone = document.getElementById('phone').value
        let obj = {
            name ,
            email,
            phone
        }
        localStorage.setItem(obj.email,JSON.stringify(obj))
        showUserDetails(obj)
    })
    function showUserDetails(obj){
    let list = document.getElementById('list')
    let li = document.createElement('li');
    li.textContent = `Name : ${obj.name}  Email : ${obj.email}  Phone :${obj.phone}`
    // create Delete Button
    let deletebutton = document.createElement('button');
    deletebutton.textContent ='Delete'
    deletebutton.className ='btn btn-danger float-right'
    // Create Edit Button
    let editbtn = document.createElement('button')
    editbtn.textContent = 'Edit'
    editbtn.className ='btn btn-primary float-right'
    deletebutton.onclick=()=>{
        localStorage.removeItem(obj.email)
        list.removeChild(li)
    }
    editbtn.onclick=()=>{
        localStorage.removeItem(obj.email)
        list.removeChild(li)
        let name1  = document.getElementById('name')
        let email1 = document.getElementById('email')
        let phone1 = document.getElementById('phone')
        name1.value = obj.name
        email1.value = obj.email
        phone1.value = obj.phone
    }
    li.appendChild(editbtn)
    li.appendChild(deletebutton)
    list.appendChild(li)

}