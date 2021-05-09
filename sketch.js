

function setup() {
  createCanvas(400,400); 
}

function draw() {
  background("black");

  translate(200,200) ;
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second(); 
   
  push(),
  hrAngle = map(hr%12,0,12,0,360);
  angleMode(DEGREES);
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  noFill();
  arc(0,0,300,300,0,hrAngle);
  pop();

  push(),
  mnAngle = map(mn,0,60,0,360); 
  angleMode(DEGREES);
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  noFill();
  arc(0,0,280,280,0,mnAngle);
  pop();

  push(),
  scAngle = map(sc,0,60,0,360);
  angleMode(DEGREES);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  noFill();
  arc(0,0,260,260,0,scAngle);
  pop();
  drawSprites();
}