var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();


function dateTime(){
  var x = document.getElementById('date');
  x.innerHTML = hours + ":" + minutes + ":" + seconds;
  x.style.color = "white";
document.body.style.backgroundColor = "blue";

}


function myFunction(){
  alert(document.getElementById('alert').innerHTML);
}


function getmyinput(){
  var x = document.getElementById('myInput').value;
  var y = document.getElementById('demo').innerHTML = x;

}

function deletemyinput(){
  var x = document.getElementById('demo').innerHTML = "";

}

function getmyinput1(){
  var x = document.getElementById('myInput').value;
  var y = document.getElementById('demo').innerHTML = x;

}

function deletemyinput1(){
  var x = document.getElementById('demo').innerHTML = "";

}
