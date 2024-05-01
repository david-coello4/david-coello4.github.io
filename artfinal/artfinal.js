let bubbles = [];
let button;
const points = [];
let dragPoint = null;
const numPoints = 5;
const dragRadius = 20;
var crab;

function preload() {
  crab = loadImage('https://david-coello4.github.io/ball/crab.png')

}
function setup() {
  createCanvas(600, 600);
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
  button.position(10, 10);
  button.mousePressed(openEmail);
}

function draw() {
  background(220);

  // Draw bubbles
  for (let bubble of bubbles) {
    bubble.display();
  }

  image(crab); //This is where you fill the bubble's color
  for (let p of points) {
    circle(p.x, p.y, dragRadius * 2);
  }
}

function mousePressed() {
  for (let i = points.length - 1; i >= 0; i--) {
    const isPressed = mouseInCircle(points[i], dragRadius);

    if (isPressed) {
      dragPoint = points.splice(i, 1)[0];
      points.push(dragPoint);
      break;
    }
  }
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

function openEmail() {
  window.open("https://david-coello4.github.io/ball/crab.png");
}

// Define Bubble class
function Bubble() {
  this.display = function() {
    //stroke(255);
    image(crab);
    //ellipse(random(0, width), random(0, height), 60, 60);
  };
}



  
