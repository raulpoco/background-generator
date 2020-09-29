var css= document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var rcolor=document.querySelector(".randcol");



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color1 = '#';
  var color2 = '#';
  for (var i = 0; i < 6; i++) {
    color1 += letters[Math.floor(Math.random() * 16)];
  }
   for (var i = 0; i < 6; i++) {
    color2 += letters[Math.floor(Math.random() * 16)];
  }
  body.style.background="linear-gradient(to right," + color1+","+color2+ ")" ;
  css.textContent=body.style.background+";" ;
}


function setGradient(){
	body.style.background="linear-gradient(to right," + color1.value+","+color2.value+ ")" ;
css.textContent=body.style.background+";" ;
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
rcolor.addEventListener("click", getRandomColor);