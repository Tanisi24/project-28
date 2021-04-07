
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1;
var stone1;
var ground1;
var tree;
var mango1,mango2,mango3,mango4,mango5;
var constraint;

function preload(){
	 boy1 = loadImage("sprites/boy.png");
}


function setup() {
	createCanvas(1000, 700);
 
  
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	ground1 = new Ground(500,650,1000,10);
   stone1= new Stone(64,540,30,30);
   stone1.scale = 0.2;
   tree = new Tree(600,420,400,470);
   mango1 = new Mango(500,374,10,10);
   mango2 = new Mango(698,340,10,10);
   mango3 = new Mango(560,273,10,10);
   mango4 = new Mango(595,347,10,10);
   mango5 = new Mango(653,277,10,10);
   
   constraint= new Constraint1(stone1.body,{x:64,y:540});
	Engine.run(engine);
  
}



function draw() {
  background(255);
  image(boy1,30,490,200,200);
  ground1.display();

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  constraint.display();
  stone1.display();
  
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);

  //text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:64,y:540})
    constraint.attach(stone1.body);
  }
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
}
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
constraint.fly();
  
}