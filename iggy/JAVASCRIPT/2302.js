function getMyInput1(){

// THIS IS VARIANT, WHAT FUNCTION YOU WANT TO SEE on SCREEN
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var myinput = document.getElementById('myInput1').value;
  var li = document.createElement("li");
  var button = document.createElement ("button");


// THIS IS WHAT YOU SEE ON SCREEN
  document.getElementById('demo').appendChild(li);
  document.getElementById('demo').appendChild(button);

  li.innerHTML = myinput + " " + hours + ":" + minutes + ":" + seconds;
  button.innerHTML = "Delete";
  button.setAttribute("id", "button1");
  button.setAttribute("onclick", "deleteMyInput()");
}

    function deleteMyInput(){
      li = document.getElementById('demo').innerHTML = "";
  }



  function myFunction(){
    var title = document.getElementById('input1').value;
    var href = document.getElementById('input2').value;
    var a = document.createElement("a");
    a.innerHTML = title;
    a.href = href;
    document.getElementById('demo2').appendChild(a);
  }

// USE ENTER (13th key) TO SUBMIT VALUE

function keyCode(event){
  var x = event.keyCode;
  if (x == 13) {
  var title = document.getElementById('input1').value;
  var href = document.getElementById('input2').value;
  var a = document.createElement("a");
  a.innerHTML = title;
  a.href = href;
  document.getElementById('demo2').appendChild(a);
}
}


// CHECK IF THE FUNCTION WORKS IN CONSOLE
  // console.log(li);
  // console.log(date);
