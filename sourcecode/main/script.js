let username =document.forms["form"]["username"];
let password =document.forms["form"]["password"];
let confirmPassword = document.getElementById("passwordConfirm")
let email =document.forms["form"]["email"];
let isValid = true

let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function validated(event){
    event.preventDefault();
    if (username.value.length < 3){
        username_error.style.display="block";
        username.style.border="1px solid red"
        isValid = false
    }else{
        username_error.style.display="none";
        username.style.border="1px solid silver"
        isValid = true
    }
    
        if (!(email.value.match(validEmail))){
        email_error.style.display="block";
        email.style.border="1px solid red"
        isValid = false
    }else{
        email_error.style.display="none";
        email.style.border="1px solid silver"
        isValid = true
    }
    if(password.value.length < 6){
        pass_error.style.display="block";
        password.style.border="1px solid red"
        isValid = false
    }else{
        pass_error.style.display="none";
        password.style.border="1px solid silver"
        isValid = true
    }

    if(confirmPassword.value !== password.value){
      
        confirm_error.style.display="block";
        confirmPassword.style.border="1px solid red"
        isValid = false
    }else{
        confirm_error.style.display="none";
        confirmPassword.style.border="1px solid silver"
    }
    if (isValid == true){
        location.replace("/home.html")
    }
}