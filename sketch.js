var violet=20;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(40,61,59); //an RGB color for the canvas' background
  stroke(217,188,175); // an RGB color for the circle's border
  fill(mouseY,40,246,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))

  ellipse(mouseX,mouseY,500,150); // left top corner, large oval shape
  triangle(100,475,violet,violet,425,475);
  textFont('barrio');
  textSize(30);
  text("Let's Boogy",100,100);
 
  
}

function mousePressed(){
  if (violet>=255) {
    violet=20;
  } else {}
violet= violet+5;
}