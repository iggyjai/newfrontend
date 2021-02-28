var input;

window.onload = function(){
  console.log("Hello World");

  document.querySelector("#saveLocal").addEventListener('click', saveLocal);


  input = document.querySelector("#textInput");

  var localValue = localStorage.getItem('textInput');

  if(localValue){
    input.value = JSON.parse(localValue).text;
  }
}

// Saves page automatically


function saveLocal(){
  var obj = {
    text: input.value,
    date: new Date()
  }
  localStorage.setItem('textInput', JSON.stringify(obj));
};

function deleteLocal(){
  localStorage.removeItem('textInput');
  input.value="";
}


function myFunction2(){
  localStorage.setItem("lastname", "John");
document.getElementById('demo').innerHTML = localStorage.getItem("lastname");
}


window.onload = function(){
  alert("Hello World");
}



var obj = '{"name":"John", "age":"30", "city":"New York"}'
var myJSON = JSON.parse(obj);
document.getElementById('demo').innerHTML = myJSON.name + ", " + myJSON.city;
