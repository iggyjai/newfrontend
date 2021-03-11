




var login;
var password;
var rpassword1;
var login2;
var password2;

window.onload = function(){
  document.querySelector("#savelocal").addEventListener('click', savelocal);

login = document.querySelector("#username1");
password = document.querySelector("#password1");
rpassword1 = document.querySelector("#rpassword1");
login2 = document.querySelector("#username2");
password2 = document.querySelector("#password2");

}

function savelocal(){
  var obj = {
    login: login.value,
    password: password.value,
    rpassword1: rpassword1.value
  }

localStorage.setItem("Registration", JSON.stringify(obj));
}

function getlocal(){
  var localValue = localStorage.getItem("Registration");
  var loginvalue = JSON.parse(localValue).login;
  var passwordvalue = JSON.parse(localValue).password;

  if(login2.value == loginvalue && password2.value == passwordvalue){
    alert("Login successful")
  }else{
      alert("Wrong password")
  }
}




$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
