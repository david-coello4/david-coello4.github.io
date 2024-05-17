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
let border; //temporary
let dragPoint = null; // Define dragPoint

function preload() {
  paper = loadImage('https://david-coello4.github.io/artfinal/paper.png');
  disk = loadImage('https://david-coello4.github.io/artfinal/disk.gif');
  folder = loadImage('https://david-coello4.github.io/artfinal/folder.png');
  button = loadImage('https://david-coello4.github.io/artfinal/button.png');
  mine = loadImage('https://david-coello4.github.io/artfinal/mine.png');
  home = loadImage('https://david-coello4.github.io/artfinal/tvscreen1.png');
  home2 = loadImage('https://david-coello4.github.io/artfinal/tvscreen2.png');
  home3 = loadImage('https://david-coello4.github.io/artfinal/tvscreen3.png');
  home4 = loadImage('https://david-coello4.github.io/artfinal/tvscreen4.png');
  currentImage = loadImage('https://david-coello4.github.io/artfinal/tvscreen1.png');
  border = loadImage('https://david-coello4.github.io/artfinal/tvborder.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(0);
  textAlign(CENTER);
  switcher = createImg('https://david-coello4.github.io/artfinal/button.png');
  switcher.position(183, 655);
  switcher.mousePressed(changeImg);
  switcher.size(100, 100); // Resize the button
  
  switcher.style('font-size', '20px'); // Adjust font size
  switcher.style('padding', '10px'); // Adjust padding
  switcher.style('width', '220px'); // Adjust width
  switcher.style('height', '200px'); // Adjust height

  for (let i = 0; i < numPoints; i++) {
    points.push(createVector(random(width), random(height)));
  }

  //==========Screen Image======================================

  disk.resize(10, 10); // Resize the disk image before creating the image element
  let diskButton = createImg('https://david-coello4.github.io/artfinal/disk.gif');
  diskButton.position(200, 200);
  diskButton.mousePressed(opendisk);
  diskButton.size(50, 50); // Resize the button

  diskButton.style('font-size', '20px'); // Adjust font size
  diskButton.style('padding', '10px'); // Adjust padding
  diskButton.style('width', '100px'); // Adjust width
  diskButton.style('height', '100px'); // Adjust height

  //==========End of Disk Button================================

  paper.resize(10, 10); // Resize the disk image before creating the image element
  let paperButton = createImg('https://david-coello4.github.io/artfinal/paper.png');
  paperButton.position(300, 400);
  paperButton.mousePressed(openpaper);
  paperButton.size(50, 50); // Resize the button

  paperButton.style('font-size', '20px'); // Adjust font size
  paperButton.style('padding', '10px'); // Adjust padding
  paperButton.style('width', '100px'); // Adjust width
  paperButton.style('height', '100px'); // Adjust height

  //==========End of Paper Button================================

  folder.resize(10, 10); // Resize the disk image before creating the image element
  let folderButton = createImg('https://david-coello4.github.io/artfinal/folder.png');
  folderButton.position(1100, 300);
  folderButton.mousePressed(openfolder);
  folderButton.size(50, 50); // Resize the button

  folderButton.style('font-size', '20px'); // Adjust font size
  folderButton.style('padding', '10px'); // Adjust padding
  folderButton.style('width', '100px'); // Adjust width
  folderButton.style('height', '100px'); // Adjust height

  //==========End of Folder Button================================

  mine.resize(10, 10); // Resize the disk image before creating the image element
  let mineButton = createImg('https://david-coello4.github.io/artfinal/mine.png');
  mineButton.position(1100, 500);
  mineButton.mousePressed(openmine);
  mineButton.size(50, 50); // Resize the button

  mineButton.style('font-size', '20px'); // Adjust font size
  mineButton.style('padding', '10px'); // Adjust padding
  mineButton.style('width', '100px'); // Adjust width
  mineButton.style('height', '100px'); // Adjust height
}

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
  window.open("https://david-coello4.github.io/3dcube/index.html");
}

function opendisk() {
  window.open('https://david-coello4.github.io/videofinal/index.html');
}

function openfolder() {
  window.open('https://david-coello4.github.io/simulation.html');
}

function openmine() {
  window.open('https://david-coello4.github.io/minesweeper/index.html');
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
  
  // Change background color here
  background(200, 100, 50); // Change the color values to your desired color
  
  image(currentImage, 0, 0, width, height);
}
