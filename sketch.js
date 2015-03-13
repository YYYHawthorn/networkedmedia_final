var x1, x2, x3, positionX2, positionY2, positionX3, positionY3,l, s, attempts;

// Runs once at the start
function setup() {

  var myCanvas = createCanvas(500, 500);
  myCanvas.parent("myContainer");

  attempts = 0;
  l = 1;
  myredraw();
}	

// Runs in a loop, over and over again
function draw() {
  // background
  background(212, 177, 106);

  if (l == 1) {
 	fill(26, 188, 156);
  	rect(0,0,x1,500);
  	s = x1 * 500;
  } 
  else if( l == 2){
    rectMode(CENTER);;
  	fill(231, 76, 60);
  	rect(positionX2,positionY2,x2,x2);
  	s = x2*x2;
  	  }
  else if ( l == 3) {
    ellipseMode(CENTER);
  	fill(255, 255, 41);
  	ellipse(positionX3,positionY3,x3,x3);
  	s = PI*x3*x3/4;
  }
  else{
  	fill(192, 57, 43);
  	textSize(60);
    noStroke();
    textAlign(CENTER);
  	text("You Win!",250,250);
  };
  // console.log(s);
}

function checkAnswer(){
  var g = document.getElementById('guess').value;
  //smoth the percentage to 10%, 20%...
  if (g == round(s/25000)){
	var moveOn= document.getElementById("next");
	moveOn.style.display = "block";
  }

  //wrong answer,redraw current level
  else{
	var  answer= document.getElementById("answ");
	answer.style.display = "block";
	answer.innerHTML = "Area percentage is closest to " + 10*round(s/25000) + "%.  Try again";
  //count attempts
  if (l == 0){attempts = 0} else{ attempts++ };

     var  attem= document.getElementById("info");
     attem.innerHTML = "Attempts: " + attempts;
     console.log(attempts);

  }
}

function myredraw(){
  // console.log(l);

    x1=randomNumber(475);

    x2 = randomNumber(248);
    positionX2 = round(random(1.2*x2, width-1.2*x2));
    positionY2 = round(random(1.2*x2, width-1.2*x2));

    x3 = randomNumber(248);
    positionX3 = round(random(1.2*x3, width-1.2*x3));
    positionY3 = round(random(1.2*x3, width-1.2*x3));

    var  answer= document.getElementById("answ");
    answer.style.display = "none";


}

function randomNumber(a){
	 return round(random(25,a)/20)*20;
}


function nextLevel(){
	var h = document.getElementById("lev");
  if (l < 3) { 
    l++;  
    h.innerHTML = "LEVEL" + l;   
  } 
  else{ 
    l = 0;
    h.innerHTML = "CONGRADULATIONS"; 
     }

	
	var  answer= document.getElementById("answ");
	answer.style.display = "none";

	var moveOn= document.getElementById("next");
	moveOn.style.display = "none";
  return false;
}