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

//  button input

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
  var x = document.getElementById('myInput1').value;
  var y = document.getElementById('demo1').innerHTML = x;

}

function deletemyinput1(){
  var x = document.getElementById('demo1').innerHTML = "";

}


//  background color

// function myFunction1(){
//   document.body.style.backgroundColor = "white";
//   document.body.style.Color = "black";
//     document.body.style.border = "5px dashed black"
//
// }
//
// function myFunction2(){
//   document.body.style.backgroundColor = "black";
//   document.body.style.color = "white";
//   document.body.style.border = "5px dashed white"
// }

function myFunction3(){
  var element = document.body;
  element.classList.toggle("Night-mode");
}
