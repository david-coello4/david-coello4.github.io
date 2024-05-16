function setup() {
  noCanvas();

  // Load a video and add it to the page.
  // Note: this may not work in some browsers.
  let video = createVideo('nggyu.mp4');

  // Show the default video controls.
  video.showControls();

  // Create a <p> element to display text
  let textElement = createP('Click the video for a fun video');
  textElement.style('font-size', '24px'); // Adjust font size
  textElement.style('color', '#000000'); // Adjust text color

  // Create the blank button
  let blankButton = createImg("https://david-coello4.github.io/videofinal/disk.gif");
  blankButton.position(325, 715);
  blankButton.size(90, 90); // Adjust button size here
  blankButton.mousePressed(openBlank); // Call openBlank function when clicked
}

function openBlank() {
  window.open('https://david-coello4.github.io/artfinal/index.html', '_blank');
}
