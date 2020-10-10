var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("banner");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}
slideIndex = 0;
carouse2();

function carouse2() {
  var i;
  var x = document.getElementsByClassName("slimg2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carouse2, 2000);
}

function function1(){
  document.getElementById("div2").style.display = "none";
  document.getElementById("div3").style.display = "none";
  document.getElementById("div1").style.display = "block";
}

function function2(){
  document.getElementById("div2").style.display = "block";
  document.getElementById("div3").style.display = "none";
  document.getElementById("div1").style.display = "none";
}

function function3(){
  document.getElementById("div2").style.display = "none";
  document.getElementById("div3").style.display = "block";
  document.getElementById("div1").style.display = "none";
}