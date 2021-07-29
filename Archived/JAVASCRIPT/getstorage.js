var timer;
var input;

window.onload = function(){
  console.log("Hello World");

  document.querySelector("#saveLocal").addEventListener('click', saveLocal);
  document.querySelector("#deleteLocal").addEventListener('click', deleteLocal);

  window.addEventListener('keypress', autosave);

  input = document.querySelector("#textInput");

  var localValue = localStorage.getItem('textInput');

  if(localValue){
    input.value = JSON.parse(localValue).text;
  }
}

// Saves page automatically

function autosave(){
  if(timer){
    clearTimeout(timer);
  }
  timer = window.setTimeout(function(){
saveLocal();
console.log('autosave');
},3000)
};

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
