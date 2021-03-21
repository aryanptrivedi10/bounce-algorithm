var r1, r2
function setup() {
  createCanvas(800, 800);
  r1=createSprite(100,100,100,40)
  r1.shapeColor="red";
  r2=createSprite(600,100,100,40)
  r2.shapeColor="blue";
  r1.velocityX= 3;
  r2.velocityX= -3;
  
  r3=createSprite(50,100,100,40)
  r3.shapeColor="red";
  r4=createSprite(50,600,100,40)
  r4.shapeColor="blue";
  r3.velocityY= 3;
  r4.velocityY= -3;
}

function draw() {
  background('lightgreen');
 // e=createEdges();
  
  if(r1.isTouching (r2)){
    r1.velocityX=r1.velocityX*(-1);
    r2.velocityX=r2.velocityX*(-1);
  }
  if(r3.isTouching(r4)){
    r3.velocityY=r3.velocityY*(-1);
    r4.velocityY=r4.velocityY*(-1);
  }
  /*r1.bounceOff(e[0]);
  r1.bounceOff(e[1]);
  r1.bounceOff(e[2]);
  r1.bounceOff(e[3]);
  */
  drawSprites();
}