var menu = 1;
var evaluate = "";
var calc1 = document.querySelector(".calc1")
var calc2 = document.querySelector(".calc2")
var display = document.querySelector(".display");
function myFunction(flag) {
  evaluate += flag;
  display.innerHTML += flag;
}


function result() {
  try {
    evaluate = eval(evaluate);
    display.innerHTML = evaluate;
  }
  catch (error) {
    display.innerHTML = "invalid";
  }
}

function AC() {
  evaluate = "";
  display.innerHTML = "";
}

function DEL() {
  evaluate = evaluate.slice(0, -1);
  display.innerHTML = evaluate;
}

function myMenu() {
  if (menu == 1) {
    calc1.style.display = "none";
    calc2.style.display = "block";
    menu = 0;
  }
  else {
    calc1.style.display = "block";
    calc2.style.display = "none";
    menu = 1;
  }
}