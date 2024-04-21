var jellyfish;
var bubbles;
var initials ='dc'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  jellyfish = loadImage('jellyfoish.png');
  bubbles = loadImage('bubbles.png');
  fish = loadImage('fish.png');
  coral= loadImage('coral.png');
  anchor= loadImage('anchor.png')
  seaweed= loadImage('seaweed.png')
  sponge= loadImage('sponge.png')
  seastar= loadImage('seastar.png')
  ward= loadImage('ward.png')
  crab= loadImage('crab.png')
  img = loadImage('https://david-coello4.github.io/images/ocean.png');
}

function setup() {
createCanvas(950, 750);  // canvas size
background(img);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

   if (toolChoice == '1' || toolChoice == '1') { // g places the image we pre-loaded (fish)
    image(fish, mouseX-25, mouseY-25, 100, 100);
   
  } else if (toolChoice == '2' || toolChoice == '2') { // g places the image we pre-loaded (bubbles)
    image(bubbles, mouseX-25, mouseY-25, 100, 100);
    
  } else if (toolChoice == '3' || toolChoice == '3') { // g places the image we pre-loaded (Jellyfish)
    image(jellyfish, mouseX-75, mouseY-75, 200, 200);
    
  } else if (toolChoice == '4' || toolChoice == '4') { // g places the image we pre-loaded (coral)
    image(coral, mouseX-75, mouseY-75, 200, 200);
    
  } else if (toolChoice == '5' || toolChoice == '5') { // g places the image we pre-loaded (anchor)
    image(anchor, mouseX-75, mouseY-75, 200, 200);
    
  } else if (toolChoice == '6' || toolChoice == '6') { // g places the image we pre-loaded (seaweed)
    image(seaweed, mouseX-75, mouseY-75, 200, 200);
    
  } else if (toolChoice == '7' || toolChoice == '7') { // g places the image we pre-loaded (sponge)
    image(sponge, mouseX-75, mouseY-75, 200, 200);
    
  } else if (toolChoice == '8' || toolChoice == '8') { // g places the image we pre-loaded (seastar)
    image(seastar, mouseX-75, mouseY-75, 200, 200);
    
  } else if (toolChoice == '9' || toolChoice == '9') { // g places the image we pre-loaded (seastar)
    image(ward, mouseX-75, mouseY-75, 200, 200);
    
  } else if (toolChoice == '0' || toolChoice == '0') { // g places the image we pre-loaded (seastar)
    image(crab, mouseX-75, mouseY-75, 200, 200);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(img); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
