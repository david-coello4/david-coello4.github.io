function setup() {
createCanvas(600, 600);
background(0, 26, 51); // Dark blue color
}
function draw() {
strokeJoin(ROUND); //Round the stroke corners
// Round the stroke corners
fill(0); //back hair color
rect(180, 60, 250, 130);
fill(209, 148, 119); //ear color
arc(205, 215, 80, 80, 0, PI+HALF_PI); //Left Ear
fill(209, 148, 119); ///ear color
arc(405, 215, 80, 80, PI, TWO_PI+HALF_PI); //Right Ear
fill(209, 148, 119); //head color
rect(200, 80, 210, 250); //Head
fill(0); //hair color
rect(200, 70, 210, 60); //hair
strokeWeight(5); // Stroke weight to 5 pixels
fill(24, 25, 26);
arc(300, 650, 450, 500, PI, TWO_PI+HALF_PI); //Body
fill(0); //Left eye
rect(200, 220, 70, 10);
fill(0); //Right Eye
rect(340, 220, 70, 10);

fill(85, 107, 47);
// Left creature
translate(180, 450);
beginShape(); 
vertex(50, 120); 
vertex(100, 90); 
vertex(110, 60); 
vertex(80, 20); 
vertex(210, 60);
vertex(160, 80); 
vertex(200, 90); 
vertex(140, 100); 
vertex(130, 120); 
endShape();
fill(0);
ellipse(155, 60, 8, 8);
}
