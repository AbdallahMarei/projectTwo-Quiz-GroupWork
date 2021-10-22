
let password =document.querySelector("#login-pass");
let confirmPassword = document.getElementById("passwordConfirm")
let email =document.querySelector(".email-input")
let isValid = true
let welcomeHeading = document.getElementById("welcome-user");

let loginForm = document.querySelector(".form-login");
let loginButton = document.getElementById("login-btn");
let loginInput = document.querySelector(".login-username");

let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function validated(event){
    event.preventDefault();
    if (loginInput.value.length < 3){
        loginInput_error.style.display="block";
        loginInput.style.border="1px solid red"
        isValid = false
    }else{
        loginInput_error.style.display="none";
        loginInput.style.border="1px solid silver"
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
        localStorage.setItem(`username ${loginInput.value}`, loginInput.value);
        window.location.href = "quiz.html";
    } 
}


loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if(loginInput.value === localStorage.getItem(`username ${loginInput.value}`)){
        window.location.href = "quiz.html";
    }else{
    alert("this username is not found, please register");
    }     
})

welcomeHeading.innerHTML = "hello";





