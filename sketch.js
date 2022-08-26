//import {onHighWarp} from "./onHighWarp.js";

let stars = [];
let speed = 10.0;
var canvas;
let firstTime = true;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  for (let i = 0; i < 500; i++){
    stars[i] = new Star();
  }

}

function draw() {
  background(175);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }  
}
// document.body.style.overflow = "hidden";

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
document.getElementById("warpfieldValue").innerHTML = speed;

//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
document.getElementById("warpfieldValue").innerHTML = 1;
var span = document.getElementsByClassName("close")[0];


var modal = document.getElementById('myModal');
//CHECK SLIDER VALUE
slider.oninput = function() {
  speed = this.value;
  if (speed > 90 && firstTime) {
    modal.style.display = 'block';
    firstTime=false;
  };
  document.getElementById("warps").focus();
  speed < 10 ? speed = 1.0 : speed = speed;
  console.log ('speed uit if' & speed);
  document.getElementById("warpfieldValue").innerHTML = speed/10;
}
// window.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";}
//   }
span.onclick = function() {
  modal.style.display = "none";
}
// show the title ... slowly
function printLetterByLetter(destination, message, speed){
  return new Promise((resolve, reject) => {
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
  });  
}

printLetterByLetter("title", "Welkom op deze Portfolio website", 25);

// function printIt() {
//   document.body.style.cursor = 'resize';
// }

