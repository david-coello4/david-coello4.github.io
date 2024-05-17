let xSlider;
let ySlider;
let zSlider;

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

  // Describing the sketch
  describe('A white cube drawn against a gray background. Three range sliders appear beneath the image. The camera position changes when the user moves the sliders.');
}

function draw() {
  background(220);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);

  // Get the camera's coordinates from the sliders.
  let x = xSlider.value();
  let y = ySlider.value();
  let z = zSlider.value();

  // Move the camera.
  camera(x, y, z);
}
