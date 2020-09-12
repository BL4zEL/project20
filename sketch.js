var car,wall
var speed,weight
function setup() {
  createCanvas(1500,800);
  speed=random(50,90)
  weight=random(400,1500)
  car = createSprite(150, 400, 250, 100);
  wall = createSprite (1450,400,100,height)
  wall.shapeColor= (80,80,80);
  car.velocityX= speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<(car.width+wall.width)/4)
  {car.velocityX=0;
   var deformation =0.5*weight*speed*speed/22509
 if(deformation>180)
 {car.shapeColor=("red")}
 if(deformation<180 && deformation>100)
 {car.shapeColor=("yellow")}
  if(deformation<100)
 {car.shapeColor=("green")}
}
  drawSprites();
}