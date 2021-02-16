// CHANGE COLOR

function myFunction(){
  let x=document.getElementById("demo");
  x.style.color="#" + Math.floor(Math.random()*16777215).toString(16);
}
function myFunction1(){
  let x=document.getElementById("demo");
  x.style.color="green";
}
function myFunction2(){
  let x=document.getElementById("demo");
  x.style.color="blue";
}

// DO MATH

function doMath(){
// document.getElementById("Math").innerHTML=Math.ceil(4.4);
// document.getElementById("Math").innerHTML=Math.floor(4.4);
// document.getElementById("Math").innerHTML=Math.floor(4.4);
// document.getElementById("Math").innerHTML=Math.pow(8,2);
// document.getElementById("Math").innerHTML=Math.sqrt(64);
document.getElementById("Math").innerHTML=Math.round(Math.random()*100);
}

// LOAD PERSON DETAILS

function loadPerson(){

let person = {
  firstName: "Ivan",
  lastName: "Ivanov",
  age: "50"
}

var x = document.getElementById("person");
x.innerHTML = person.firstName + " " + person.lastName + " is " + person.age + " years old ";
}
