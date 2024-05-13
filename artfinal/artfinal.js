let ballx = 300;
let bally = 300;
let ballSize = 40;
const points = [];
const numPoints = 5;
let switcher;
let button;
let disk;
let home;
let home2;
let home3;
let home4;
let folder;
let currentImage;
//let video; //video place holder code
let border; //temporary
let dragPoint = null; // Define dragPoint

function preload() {
  paper = loadImage('https://david-coello4.github.io/artfinal/paper.png');
  disk = loadImage('https://david-coello4.github.io/artfinal/disk.gif');
  folder = loadImage('https://david-coello4.github.io/artfinal/folder.png');
  home = loadImage('https://david-coello4.github.io/artfinal/tvscreen1.png');
  home2 = loadImage('https://david-coello4.github.io/artfinal/tvscreen2.png');
  home3 = loadImage('https://david-coello4.github.io/artfinal/tvscreen3.png');
  home4 = loadImage('https://david-coello4.github.io/artfinal/tvscreen4.png');
  currentImage = loadImage('https://david-coello4.github.io/artfinal/tvscreen1.png');
  border = loadImage('https://david-coello4.github.io/artfinal/tvborder.png');
}

function setup() {
  createCanvas(1512, 807);
  textAlign(CENTER);
  switcher = createButton('Change Image');
  switcher.position(225, 725);
  switcher.mousePressed(changeImg);
  //video = createCapture(VIDEO, videoReady, videoError);//video place holder code
  //video.size(100, 100); //video place holder code

  for (let i = 0; i < numPoints; i++) {
    points.push(createVector(random(width), random(height)));
  }

  //==========Screen Image======================================

  disk.resize(10, 10); // Resize the disk image before creating the image element
  button = createImg('https://david-coello4.github.io/artfinal/disk.gif');
  button.position(200, 200);
  button.mousePressed(opendisk);
  button.size(50, 50); // Resize the button

  button.style('font-size', '20px'); // Adjust font size
  button.style('padding', '10px'); // Adjust padding
  button.style('width', '100px'); // Adjust width
  button.style('height', '100px'); // Adjust height

  //==========End of Disk Button================================

  paper.resize(10, 10); // Resize the disk image before creating the image element
  button = createImg('https://david-coello4.github.io/artfinal/paper.png');
  button.position(300, 400);
  button.mousePressed(openpaper);
  button.size(50, 50); // Resize the button

  button.style('font-size', '20px'); // Adjust font size
  button.style('padding', '10px'); // Adjust padding
  button.style('width', '100px'); // Adjust width
  button.style('height', '100px'); // Adjust height

  //==========End of Paper Button================================

  folder.resize(10, 10); // Resize the disk image before creating the image element
  button = createImg('https://david-coello4.github.io/artfinal/folder.png');
  button.position(1100, 300);
  button.mousePressed(openfolder);
  button.size(50, 50); // Resize the button

  button.style('font-size', '20px'); // Adjust font size
  button.style('padding', '10px'); // Adjust padding
  button.style('width', '100px'); // Adjust width
  button.style('height', '100px'); // Adjust height
}

//==========End of Folder Button================================

function draw() {
  background(border); // Display background image
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

function openpaper() {
  window.open("https://david-coello4.github.io/artfinal/paper.png");
}

function opendisk() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}

function openfolder() {
  window.open('https://david-coello4.github.io/index.html');
}

function changeImg() {
  if (currentImage === home) {
    currentImage = home2;
  } else if (currentImage === home2) {
    currentImage = home3;
  } else if (currentImage === home3) {
    currentImage = home4;
  } else {
    currentImage = home;
  }
  background(255);
  image(currentImage, 0, 0, width, height);
}
