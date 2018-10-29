let case1 = document.getElementById("square1");
let case2 = document.getElementById("square2");
let case3 = document.getElementById("square3");
let case4 = document.getElementById("square4");
let case5 = document.getElementById("square5");
let case6 = document.getElementById("square6");
let case7 = document.getElementById("square7");
let case8 = document.getElementById("square8");
let case9 = document.getElementById("square9");
let case10 = document.getElementById("square10");
let case11 = document.getElementById("square11");
let case12 = document.getElementById("square12");
let case13 = document.getElementById("square13");
let case14 = document.getElementById("square14");


case1.addEventListener("click",changeColor,false);
case2.addEventListener("click",changeColor,false);
case3.addEventListener("click",changeColor,false);
case4.addEventListener("click",changeColor,false);
case5.addEventListener("click",changeColor,false);
case6.addEventListener("click",changeColor,false);
case7.addEventListener("click",changeColor,false);
case8.addEventListener("click",changeColor,false);
case9.addEventListener("click",changeColor,false);
case10.addEventListener("click",changeColor,false);
case11.addEventListener("click",changeColor,false);
case12.addEventListener("click",changeColor,false);
case13.addEventListener("click",changeColor,false);
case14.addEventListener("click",changeColor,false);


function changeColor() {
  if (this.classList.contains("bgWhite") === true) {
    this.classList.remove("bgWhite");
    this.classList.add("bgYellow");
  } else if (this.classList.contains("bgYellow") === true) {
    this.classList.remove("bgYellow");
    this.classList.add("bgBlue");
  } else if (this.classList.contains("bgBlue") === true) {
    this.classList.remove("bgBlue");
    this.classList.add("bgRed");
  } else if (this.classList.contains("bgRed") === true) {
    this.classList.remove("bgRed");
    this.classList.add("bgWhite");
  }
}


/*case1.addEventListener("click", colorChange1, false);
function colorChange1(){
  case1.classList.add("bgGreen")
  case1.classList.remove("bgYellow")
}

case2.addEventListener("click", colorChange2, false)
function colorChange2(){
  case2.classList.add("bgSoftBlue")
  case2.classList.remove("bgRed")
}

case3.addEventListener("click", colorChange3, false)
function colorChange3(){
  case3.classList.add("bgPink")
  case3.classList.remove("bgBlue")
}

case4.addEventListener("click", colorChange4, false)
function colorChange4(){
  case4.classList.add("bgSoftOrange")
}

case5.addEventListener("click", colorChange5, false)
function colorChange5(){
  case5.classList.add("bgBlack")
}

case6.addEventListener("click", colorChange6, false)
function colorChange6(){
  case6.classList.add("bgBrown")
}

case7.addEventListener("click", colorChange7, false)
function colorChange7(){
  case7.classList.remove("bgRed")
}

case8.addEventListener("click", colorChange8, false)
function colorChange8(){
  case8.classList.add("bgBlue")
}

case9.addEventListener("click", colorChange9, false)
function colorChange9(){
  case9.classList.add("bgYellow")
  case9.classList.remove("bgRed")
}

case10.addEventListener("click", colorChange10, false)
function colorChange10(){
  case10.classList.remove("bgBlue")
}

case11.addEventListener("click", colorChange11, false);
function colorChange11(){
  case11.classList.add("bgGreen")
  case11.classList.remove("bgYellow")
}

case12.addEventListener("click", colorChange12, false);
function colorChange12(){
  case12.classList.add("bgRed")
}

case13.addEventListener("click", colorChange13, false);
function colorChange13(){
  case13.classList.add("bgSoftOrange")
}*/
