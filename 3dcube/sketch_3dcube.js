let xSlider;
let ySlider;
let zSlider;
let bgImage;

function preload() {
  bgImage = loadImage('https://david-coello4.github.io/3dcube/shocked.png');
}

function setup() {
  createCanvas(1000, 800, WEBGL);

  xSlider = createSlider(-400, 400, 400);
  xSlider.position(450, 700);
  xSlider.size(150);
  ySlider = createSlider(-400, 400, -200);
  ySlider.position(450, 720);
  ySlider.size(150);
  zSlider = createSlider(0, 1600, 800);
  zSlider.position(450, 740);
  zSlider.size(150);
  
  // Create blank button
  blankButton = createImg("https://david-coello4.github.io/artfinal/paper.png"); // Using an image instead of text for the blank button
  blankButton.position(width + 10, 70);
  blankButton.size(100, 100); // Adjust button size here
  blankButton.mousePressed(openfolder); // Call openfolder function when clicked
}

// Describing the sketch
describe('A white cube drawn against a gray background. Three range sliders appear beneath the image. The camera position changes when the user moves the sliders.');

function draw() {
  background(255); // Set background color to white
  // Draw background image with fixed coordinates
  push(); // Save the current drawing state
  translate(-width / 2, -height / 2); // Move to the top-left corner of the canvas
  image(bgImage, 0, 0, width, height); // Draw the background image
  pop(); // Restore the previous drawing state

  // Adjust camera position based on sliders
  let x = xSlider.value();
  let y = ySlider.value();
  let z = zSlider.value();
  camera(x, y, z);

  // Draw rotating box
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);
}

function openfolder() {
  window.open('https://david-coello4.github.io/artfinal/index.html', '_blank');
}
