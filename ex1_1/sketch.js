

let lxo = 250;
 let lyo = 250;

 let bgcounter = 0;
 let counter = 0;
 let img;
 let randomPointX, randomPointY
 var x, y;
 var radius;

function preload() {
  img = loadImage("assets/errorwindow.png");
}

function setup() {
  createCanvas(600,600);
  background(20);
  fill(255);
  frameRate(40);
  imageMode(CENTER);
  noStroke();
  x = 230;
  y = 250;
  radius = 120;
}

function draw() {
  noStroke();

  // ----------------------- background glitch starts

for (let i = 0; i < height; i += 20) {


  for (let j = 0; j < height; j += 25) {
   let randr = random(177);
   let randg = random(238);
   let randb = random(232);
    fill(randr, randg, randb);
    rect( i+-20, j+15, i+5, 5 ); //<--------------------------rectangle used

    console.log("this has a greyscale value of" + randr);


 }
}

// ----------------------- back hair and hat

fill(27,50,121); //back hair color
stroke(0);
quad(40, 575, 375, 375, 400, 150, 55, 150); //<-------------- one of quad used

fill(17,44,98); //base hat color
quad(50, 30, 140, -5, 200, 40, 40, 100);

fill(0);
rect(100, 25, 55, 40); //right rect
rect(60, 35, 55, 40); //left rect

fill(177,238,232, 225);
rect(105, 20, 55, 40); //right rect
rect(65, 30, 55, 40); //left rect

fill(17,44,98); //base hat color
quad(40, 100, 105, 40, 200, 40, 130, 115); //whole brim
fill(0);
quad(40, 100, 115, 60, 200, 40, 130, 115); //shadow under brim



  // ----------------------- clothing start

  fill(8,20,52); //back left coat color
  stroke(0);
   quad(165, 525, 250, 525, 450, 325, 25, 475);
   quad(60, 625, 335, 625, 285, 500, 160, 525); //front right bottom coat color
  
  fill(34,44,62); //body
   quad(175, 625, 350, 625, 325, 450, 175, 500);
  fill(0);
  quad(225, 565, 275, 550, 325, 450, 225, 484); //top tie
  quad(215, 600, 300, 650, 275, 565, 225, 580); //bottom tie
  
   fill(17,44,98); //front right top coat color
    quad(325, 525, 450, 500, 450, 325, 200, 450);
    quad(225, 625, 500, 625, 450, 500, 325, 525); //front right bottom coat color



  //bottom left point,bottom right point,upper right point,upper left point

  // ----------------------- face starts

 fill(255); //face color
 stroke(0);
 triangle(75, 250, 350, 150, 290, 400); //<------------------- triangle at use

  // ----------------------- mouth start

stroke(0);
 line(190, 330, 309, 325);//top of mouth

 stroke(0);
 line(225, 329, 255, 375);//teeth one

 stroke(0);
 line(255, 328, 290, 400);//teeth two middle

 stroke(0);
 line(285, 326, 296, 375);//teeth two middle

   // ----------------------- hair bangs start

  stroke(0)
  fill(70,120,218); //left side bangs
  quad(85, 240, 115, 175, 150, 425, 75, 400);

  stroke(0);
  fill(70,120,218); // right side bang
  quad(365, 155, 335, 140, 300, 340, 375, 315);

  var d = dist(mouseX, mouseY,x, y); //normally with face
  
  if (d< radius){
    fill(25); // exclamation mark | (right)
    //upper left point,upper right point,bottom right point,bottom left point
    stroke(0)
    quad(260, 190, 295, 180, 290, 280, 270, 275);
  
    fill(25); // exclamation point . (right)
    //upper left point,upper right point,bottom right point,bottom left point
    stroke(0)
    quad(270, 285, 290, 290, 290, 305, 270, 305);

  fill(25); // exclamation mark | (left)
  //upper left point,upper right point,bottom right point,bottom left point
  stroke(0)
  quad(160, 210, 195, 200, 190, 300, 170, 295);

  fill(25); // exclamation point . (left)
  //upper left point,upper right point,bottom right point,bottom left point
  stroke(0)
  quad(170, 305, 190, 310, 190, 325, 170, 325);

  }else{
   fill(25); //closed right eye
   //upper left point,upper right point,bottom right point,bottom left point
   stroke(0)
   quad(245, 250, 350, 225, 350, 250, 250, 265);

   fill(0); //left eye
 stroke(0);
 triangle(125, 325, 150, 215, 225, 300);
 fill(255); //left over eye
 stroke(255);
 triangle(150, 319, 160, 250, 220, 302);
  }

stroke(0);
 fill(70,120,218); //hair color
 quad(50, 140, 265, 45, 400, 150, 50, 275);

  fill(177,238,232, 225); // hair "cut"
 stroke(0);
 triangle(125, 248, 125, 175, 175, 230);
 circle(285, 115, 25);

 stroke(0)
 line(335, 100, 297, 110);
stroke(0)
 line(125, 175, 99, 119);
 
  
  // ----------------------- brush start

 fill(177,238,232, 225); //left blush
 stroke(0);
 ellipse(175, 335, 80, 40); //<---------------------------- ellipse at use

 fill(177,238,232, 225); //right blush
 ellipse(325, 290, 80, 40);

 // ----------------------- window center mouse

//this is for making the image shake and center of the mouse/drag
  randomPointX = random(-100, 100); 
  randomPointY = random(-100, 100);
  image(img,mouseX + randomPointX, mouseY + randomPointY, 300, (img.height / img.width) * 300);
  img.resize(300,0);

}
