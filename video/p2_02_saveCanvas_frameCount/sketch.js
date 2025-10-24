
let recMode = false;
let can; 
let s1, s2;
let t = 0;
let bgColor;
let loopFrame = 0;

function setup(){
    can = createCanvas(1900, 1200);
    frameRate(60);
    console.log(frameCount);

        s1 = new dcSine(-200, 0, 0, 0, 1.5, .005, 150);
        s2 = new dcSine(200, 0, 0, 0, -1.5, .005, 150);
        

}
  
  function draw(){
    translate(width/2,height/2);

    loopFrame = frameCount % 1200;

    if (frameCount < 300) {
        bgColor = color(50,74,178, 20); 
    } else if (frameCount < 600) {
        bgColor = color(178,50,138, 20); 
    } else if (frameCount < 900) {
        bgColor = color(178,154,50, 20); 
    } else {
        bgColor = color(50,178,90, 20); 
    }

    background(bgColor);
    stroke('#0f0f0f');
    strokeWeight(4.5);

    for(let i = 0; i < 100; i++){
        line(x1 (t + i), y1 (t + i), x2(t + i ) + 20, y2 (t + i) + 20);
    }
    t += 0.20;

        s1.update(t);
        s1.display(t);
        s2.update(-t);
        s2.display(-t);
    
        // recordit();  // If you want to record frames, uncomment this line

}

  function x1(t) {
    if (loopFrame < 300) {
        console.log("the first act");

        return sin(t/10)*125+sin(t/20)*10+sin(t/30)*75;

        
    } else {
        return sin(t/40) * 125;
    }
}
  function y1(t) {
    if (loopFrame < 600) {
        console.log("the second act");

        return cos(t/10)*425+cos(t/20)*425+cos(t/30)*425;
    } else {
        return sin(t/40) * 625;
    }
}

  function x2(t) {
    if (loopFrame < 900) {
        console.log("the third act");

        return sin(t/5)*325+sin(t/25)*425+sin(t/805)*525;
    } else {
        return sin(t/40) * 325;
    }
  }

  function y2(t) {
    if (loopFrame < 1200) {
        console.log("the fourth act");

        return cos(t/15)*425+cos(t/25)*425+cos(t/35)*125;
  } else {

    return sin(t/40) * 225;
}

}


/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

function recordit() { 
    if (recMode == true) {
        let ext = nf(frameCount, 4);
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}


class dcSine {

    xcounter;
    ycounter;
    sincount;
    addcount;
    dir;
    freq;
    amp;
    x;
    y;
    ellipseCol;
    ellipseSize;
  
    constructor(lx,ly,ls,la,ld,lf,lamp) {
    
     this.xcounter = lx;
     this.ycounter = ly;
     this.sincount = ls;
     this.addcount = la;
     this.vDir = ld;
     this.hDir = ld;
     this.freq = lf;
     this.amp = lamp;
     this.x1 = 0;
     this.y1 = 0;
     this.x2 = 0;
     this.y2 = 0;
     this.ellipseCol;
     this.ellipseSize = 30;

  
    }
  
  
    display() {
  
        push();
        translate(this.xcounter,this.sincount);

        if (loopFrame < 300) {

            this.ellipseCol = color(50,74,178, 20);
            
        } else if (loopFrame < 600) {

            this.ellipseCol = color(178,50,138, 20);

        } else if (loopFrame < 900) {

            this.ellipseCol = color(178,154,50, 20);

        } else {

            this.ellipseCol = color(50,178,90, 20);
        }

        fill(this.ellipseCol);
        rect(0, 0, this.ellipseSize, this.ellipseSize);
        pop();
  
    }
  
  
    update(t) {
  
        console.log( sin(this.ycounter));
        this.ycounter+= this.freq;  
        this.sincount = sin(this.ycounter) * this.amp + this.addcount;

        this.x1 = x1(t);
        this.y1 = y1(t);
        this.x2 = x2(t);
        this.y2 = y2(t);
      
        this.addcount += this.vDir;
        if ( this.addcount < 100 ||  this.addcount > 100) {
            this.vDir *= -1;
        }
  
        this.xcounter += this.hDir;
        if ( this.xcounter < -200 || this.xcounter > 200) {
          this.hDir *= -1;
        }

        this.ellipseSize = 20 + sin(t * 0.1) * 10; 
  
    }
  
  

  
    getSine() {
      return  this.sincount;
       }
  
       setSineFreq(nf) {
        this.freq = nf;
  
       }
  
  

  }  // end of class