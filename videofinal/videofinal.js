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
  textElement.style('color', 0); // Adjust text color
}
