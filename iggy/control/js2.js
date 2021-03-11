




var login;
var password;
var rpassword1;
var login2;
var password2;
var captcha;
var random;

window.onload = function(){

document.querySelector("#getlocal").addEventListener('click', getlocal);
login = document.querySelector("#username1");
password = document.querySelector("#password1");
rpassword1 = document.querySelector("#rpassword1");
login2 = document.querySelector("#username2");
password2 = document.querySelector("#password2");
captcha = document.querySelector("#captcha");
random = document.getElementById('div1').innerHTML = Math.floor(Math.random()*10000+1);

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



  if(login2.value == loginvalue && password2.value == passwordvalue && captcha.value == random){
    alert("Login successful")
  }else{
      alert("Wrong password")
  }
}




$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
