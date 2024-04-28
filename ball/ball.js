var ballx = 300;
var bally = 300;
var ballSize = 100;
var score = 0;
var gameState = "L1";
var crab, sponge, seastar, squid, home;

function preload() {
  crab = loadImage('https://david-coello4.github.io/ball/crab.png')
  sponge = loadImage('https://david-coello4.github.io/ball/sponge.png')
  seastar = loadImage('https://david-coello4.github.io/ball/seastar.png')
  squid = loadImage('https://david-coello4.github.io/ball/ward.png')
  home =  loadImage('https://david-coello4.github.io/ball/background2.png')
}
function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(20);

}// end setup


function draw() {

background(home);
if(gameState == "L1"){
levelOne();
}
if(gameState == "L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
if(gameState == "L4"){
  levelFour();
 
}
if(gameState == "win"){
  youWin();
}
  
  text(("Score: " +score), width/2, 40);
  fill(108, 135, 220)
  strokeWeight(76, 96, 156)
}// end draw

function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
    
  }
  if(score>= 5){
    gameState = "L2";
    ballSize=80;
  }
  image(crab, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize)
  //line(ballx, bally, mouseX, mouseY);
  
}// end of level 1 =====================================

function levelTwo(){
  background(home);
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
    
  }
  if(score>= 10){
    gameState = "L3";
    ballSize=60
  }
  image(sponge, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize)
  //line(ballx, bally, mouseX, mouseY);
  
}// end of level 2 =====================================
function levelThree(){
  background(home);
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
    
  }
  if(score>= 15){
    gameState = "L4";
    ballSize=40
  }
  image(seastar, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize)
  //line(ballx, bally, mouseX, mouseY);
  
}// end of level 3 =====================================
function levelFour(){
  background(home);
  text("Level 4", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
    
  }
  if(score>= 20){
    gameState = "win";
    ballSize=20
  }
  image(squid, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize)
  //line(ballx, bally, mouseX, mouseY);

}// end of level 4 =====================================
function youWin(){
    background(home);
  textSize(100);
  text("You Win", width/2, height-20);
  textSize(20);
  fill(108, 135, 220);
  
  
}// end of level 5 =====================================
