const username = document.getElementById('username-inp')
const password = document.getElementById('userpassword-inp')
const loginButton = document.getElementById('login-btn')


loginButton.onclick =async () =>{
    const res = await postRequest('/db',{
        type : 'getAll',
        collection : 'Users'
    })
    res.data.forEach(user => {
        if(user._fieldsProto.name.stringValue === username.value){
            window.location = './pages/mainpage.html'
        }
    })
    alert('User Credentials invalid')
}