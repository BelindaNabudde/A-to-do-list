
const signUp=e =>{
let userName=document.querySelector('#username').value,
    email=document.querySelector('#email').value,
    password=document.querySelector('#password').value;
    

    let formData=JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length  &&
    JSON.parse(localStorage.getItem('formData')).some(data =>
    data.userName.toLowerCase()==userName.toLowerCase()
    );

    if(!exist){
        formData.push({userName,email,password});
        localStorage.setItem('formData',JSON.stringify(formData));
        document.querySelector('#signUp').reset();
        document.querySelector('#username').focus();
        // document.querySelector('#password').focus();
        alert("Account created")
    }
    else{
        alert("You already have an account");
    }
    e.preventDefault();
}
function signIn (e) {
    let username=document.querySelector('#userName').value;
    let pwd = document.querySelector('#Password').value;

    let formData=JSON.parse(localStorage.getItem(formData)) || [];
    let exist= formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data =>
        data.username.toLowerCase()==username
        &&
        data.pwd.toLowerCase()==pwd);

        if (!exist ){
            alert('Incorrect username')
        }
        else{
            location.href="/";
        }
        e.preventDefault();
}