let password = document.querySelector("#login-pass");
let confirmPassword = document.getElementById("passwordConfirm");
let email = document.querySelector(".email-input");
let isValid = true;
let welcomeHeading = document.getElementById("welcome-user");
let loginInput_error = document.querySelector("#username_error");
let email_error = document.querySelector("#email_error");
let pass_error = document.querySelector("#pass_error");
let confirm_error = document.querySelector("#confirm_error");

let loginForm = document.querySelector(".form-login");
let loginButton = document.getElementById("login-btn");
let loginInput = document.querySelector(".login-username");

let users = [];

function validated(event) {
  event.preventDefault();
  if (loginInput.value.length < 3) {
    loginInput_error.style.display = "block";
    loginInput.style.border = "1px solid red";
    isValid = false;
  } else {
    loginInput_error.style.display = "none";
    loginInput.style.border = "1px solid silver";
    isValid = true;
  }

  if (password.value.length < 6) {
    pass_error.style.display = "block";
    password.style.border = "1px solid red";
    isValid = false;
  } else {
    pass_error.style.display = "none";
    password.style.border = "1px solid silver";
    isValid = true;
  }

  if (confirmPassword.value !== password.value) {
    confirm_error.style.display = "block";
    confirmPassword.style.border = "1px solid red";
    isValid = false;
  } else {
    confirm_error.style.display = "none";
    confirmPassword.style.border = "1px solid silver";
  }
  if (isValid == true) {
    localStorage.setItem(`username ${loginInput.value}`, loginInput.value);
    // window.location.href = "quiz.html";
    document.getElementById("login").style.display = "none";
    document.getElementById("login-welcome").style.display = "block";
    document.getElementById("welcome-name").innerHTML =
      "Welcome " + localStorage.getItem(`username ${loginInput.value}`);
  }
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    loginInput.value === localStorage.getItem(`username ${loginInput.value}`)
  ) {
    // window.location.href = "quiz.html";
    document.getElementById("login").style.display = "none";
    document.getElementById("login-welcome").style.display = "block";
    document.getElementById("welcome-name").innerHTML =
      "Welcome " + localStorage.getItem(`username ${loginInput.value}`);
  } else {
    alert("this username is not found, please register");
  }
});
