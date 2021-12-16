const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannonBase, cannon, cannonball;
var cannonBaseImg, cannonImg;
var cball = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
angleMode(DEGREES);
angle = 15;
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180,110,130,100,angle);

  
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();
  for (var i = 0; i<cball.length;i++){
    showCBalls(cball[i], i);
  }
  cannon.show();
  //cannonball.show();
}
function keyReleased(){
  if (keyCode === RIGHT_ARROW){
    cannonball = new Cannonball(cannon.x,cannon.y);
    //Matter.Body.setAngle(cannonball.body, cannonball.angle);
    cball.push(cannonball);
    //cannonball.shoot();
  }
}
function showCBalls(ball){
  if (ball){
    ball.show();
  }
}
function keyReleased(){
  if (keyCode === RIGHT_ARROW){
    cball[cball.length - 1].shoot();
  }
}