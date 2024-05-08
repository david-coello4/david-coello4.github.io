let bubbles = [];
let button;
const points = [];
let dragPoint = null;
const numPoints = 5;
const dragRadius = 20;
let crab;
let sponge;
let home;
var bgcolor;


function preload() {
  crab = loadImage('https://david-coello4.github.io/ball/crab.png');
  sponge = loadImage('https://david-coello4.github.io/ball/sponge.png');
  home = loadImage('https://david-coello4.github.io/artfinal/background_test.png'); // Replace placeholder with actual background
}

function setup() {
  createCanvas(1475, 800);
  bgcolor = color(200);
  textAlign(CENTER);
  strokeWeight(5);
  textSize(30);

  for (let i = 0; i < 6; i++) {
    bubbles[i] = new Bubble();
  }

  for (let i = 0; i < numPoints; i++) {
    points.push(createVector(random(width), random(height)));
  }

  button = createButton('test');
  button.position(210, 160);
  button.mousePressed(opencrab);

  button = createButton('test2'); // Corrected placement
  button.position(200, 300); // Adjusted position
  button.mousePressed(opensponge);

  button = createButton("change background"); // Corrected placement
  button.position(150, 730); // Adjusted position
  button.mousePressed(changeColor);
}


function draw() {
  background(bgcolor);
  background(home);
  
}

function mouseDragged() {
  if (dragPoint) {
    dragPoint.x = mouseX;
    dragPoint.y = mouseY;
  }
}

function mouseReleased() {
  dragPoint = null;
}

function mouseInCircle(pos, radius) {
  return dist(mouseX, mouseY, pos.x, pos.y) < radius;
}

function opencrab() {
  window.open("https://david-coello4.github.io/ball/crab.png");
}

function opensponge() {
  window.open("https://david-coello4.github.io/ball/sponge.png");
}
  
function changeColor() {
  bgcolor = color(random(150, 255), random(150, 255), random(150, 255));
  
}

// Define Bubble class
function Bubble() {
  this.display = function() {
    //image(crab, random(0, width), random(0, height)); // Display crab image at random positions
  };
}


  
