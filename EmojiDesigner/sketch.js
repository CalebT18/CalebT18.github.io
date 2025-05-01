let bgColor;
let faceX, faceY;
let smile  = {
    x: 300, 
    y: 450, 
    w: 100,
    h: 50,  
    isDragging: false,
    offsetX: 0,
    offsetY: 0
  }
  // Eye pair: looking straight (movable)
  let eyeStraight = {
    x: 250,
    y: 300,
    w: 30,
    h: 30,
    isDragging: false,
    offsetX: 0,
    offsetY: 0
  };
  // Eye pair: looking straight(movable)
  let eyeStraight2 = {
    x: 350,
    y: 300,
    w: 30,
    h: 30,
    isDragging: false,
    offsetX: 0,
    offsetY: 0
  };
  // Eye pair: side-eye(movable)
  let eyeSide = {
    x: 250,
    y: 350,
    w: 30,
    h: 30,
    isDragging: false,
    offsetX: 0,
    offsetY: 0
  };
  // Eye pair: side-eye(movable)
  let eyeSide2 = {
    x: 350,
    y: 350,
    w: 30,
    h: 30,
    isDragging: false,
    offsetX: 0,
    offsetY: 0
  };
  // Frown arc (movable)
  let frown = {
    x: 400,
    y: 450,
    w: 100,
    h: 50,
    isDragging: false,
    offsetX: 0,
    offsetY: 0
  };
  // Eyebrows (left and right)(movable)
let eyebrow = {
    x: 100, 
    y: 350,
    w: 150,
    h: 10,
    isDragging: false ,
    offsetX: 0,
    offsetY: 0
}
// Eyebrows (left and right)(movable)
 let eyebrow2 ={
    x: 300, 
    y: 350,
    w: 150,
    h: 10,
    isDragging: false ,
    offsetX: 0,
    offsetY: 0
 }
// Setting up canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(0, 100, 255);
  faceX = width / 2;
  faceY = height / 2;
}
 // For the emoji,Everything inside here will keep appearing 
function draw()
{
    background(bgColor);
    fill(255, 204, 0);
    ellipse( faceX, faceY, 500, 500);

    fill(0);
    rect(eyebrow.x, eyebrow.y, eyebrow.w, eyebrow.h);
   
    if (eyebrow.isDragging) {
        eyebrow.x = mouseX - eyebrow.offsetX;
        eyebrow.y = mouseY - eyebrow.offsetY;
      }

    fill(0);
    rect(eyebrow2.x, eyebrow2.y, eyebrow2.w, eyebrow2.h);

    if(eyebrow2.isDragging){
    eyebrow2.x = mouseX - eyebrow2.offsetX;
    eyebrow2.y = mouseY - eyebrow2.offsetY;
    }
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(smile.x, smile.y, smile.w, smile.h, 0, PI);

if (smile.isDragging) {
  smile.x = mouseX - smile.offsetX;
  smile.y = mouseY - smile.offsetY;
}
noFill();
stroke(0);
strokeWeight(4);
arc(frown.x, frown.y, frown.w, frown.h, PI, 0);

if (frown.isDragging) {
  frown.x = mouseX - frown.offsetX;
  frown.y = mouseY - frown.offsetY;
}


fill(0);
ellipse(eyeStraight.x, eyeStraight.y, eyeStraight.w, eyeStraight.h);
ellipse(eyeStraight2.x, eyeStraight2.y, eyeStraight2.w, eyeStraight2.h);

if (eyeStraight.isDragging) {
  eyeStraight.x = mouseX - eyeStraight.offsetX;
  eyeStraight.y = mouseY - eyeStraight.offsetY;
}

if (eyeStraight2.isDragging) {
  eyeStraight2.x = mouseX - eyeStraight2.offsetX;
  eyeStraight2.y = mouseY - eyeStraight2.offsetY;
}


fill(0);
ellipse(eyeSide.x, eyeSide.y, eyeSide.w, eyeSide.h);
ellipse(eyeSide2.x, eyeSide2.y, eyeSide2.w, eyeSide2.h);

if (eyeSide.isDragging) {
  eyeSide.x = mouseX - eyeSide.offsetX;
  eyeSide.y = mouseY - eyeSide.offsetY;
}

if (eyeSide2.isDragging) {
  eyeSide2.x = mouseX - eyeSide2.offsetX;
  eyeSide2.y = mouseY - eyeSide2.offsetY;
}
}
// Below is for dragging each facial expression
function mousePressed() {
   
    if (
      mouseX > eyebrow.x &&
      mouseX < eyebrow.x + eyebrow.w &&
      mouseY > eyebrow.y &&
      mouseY < eyebrow.y + eyebrow.h
    ) {
      eyebrow.isDragging = true;
      eyebrow.offsetX = mouseX - eyebrow.x;
      eyebrow.offsetY = mouseY - eyebrow.y;
    }
  
    
    if (
      mouseX > eyebrow2.x &&
      mouseX < eyebrow2.x + eyebrow2.w &&
      mouseY > eyebrow2.y &&
      mouseY < eyebrow2.y + eyebrow2.h
    ) {
      eyebrow2.isDragging = true;
      eyebrow2.offsetX = mouseX - eyebrow2.x;
      eyebrow2.offsetY = mouseY - eyebrow2.y;
    }
  
    
    if (
      mouseX > smile.x - smile.w / 2 &&
      mouseX < smile.x + smile.w / 2 &&
      mouseY > smile.y - smile.h / 2 &&
      mouseY < smile.y + smile.h / 2
    ) {
      smile.isDragging = true;
      smile.offsetX = mouseX - smile.x;
      smile.offsetY = mouseY - smile.y;
    }
    if (
        mouseX > frown.x - frown.w / 2 &&
        mouseX < frown.x + frown.w / 2 &&
        mouseY > frown.y - frown.h / 2 &&
        mouseY < frown.y + frown.h / 2
      ) {
        frown.isDragging = true;
        frown.offsetX = mouseX - frown.x;
        frown.offsetY = mouseY - frown.y;
      }
      
      
      if (
        dist(mouseX, mouseY, eyeStraight.x, eyeStraight.y) < eyeStraight.w / 2
      ) {
        eyeStraight.isDragging = true;
        eyeStraight.offsetX = mouseX - eyeStraight.x;
        eyeStraight.offsetY = mouseY - eyeStraight.y;
      }
      
      if (
        dist(mouseX, mouseY, eyeStraight2.x, eyeStraight2.y) < eyeStraight2.w / 2
      ) {
        eyeStraight2.isDragging = true;
        eyeStraight2.offsetX = mouseX - eyeStraight2.x;
        eyeStraight2.offsetY = mouseY - eyeStraight2.y;
      }
      
      
      if (
        dist(mouseX, mouseY, eyeSide.x, eyeSide.y) < eyeSide.w / 2
      ) {
        eyeSide.isDragging = true;
        eyeSide.offsetX = mouseX - eyeSide.x;
        eyeSide.offsetY = mouseY - eyeSide.y;
      }
      
      if (
        dist(mouseX, mouseY, eyeSide2.x, eyeSide2.y) < eyeSide2.w / 2
      ) {
        eyeSide2.isDragging = true;
        eyeSide2.offsetX = mouseX - eyeSide2.x;
        eyeSide2.offsetY = mouseY - eyeSide2.y;
      }
  }
// This releases all parts when mouse is let go 
 function mouseReleased() {
    eyebrow.isDragging = false;
    eyebrow2.isDragging = false;
    smile.isDragging = false;
    frown.isDragging = false;
    eyeStraight.isDragging = false;
    eyeStraight2.isDragging = false;
    eyeSide.isDragging = false;
    eyeSide2.isDragging = false;
  }