
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3
function preload()
{
	
}

function setup() {
  createCanvas(1000, 700);
  dustbin1 = createSprite(width/2+200,540,20,100);
dustbin1.shapeColor =color(255);
dustbin2 = createSprite(width/2+300,580,200,20);
dustbin2.shapeColor = color(255);
dustbin3 = createSprite(width/2+400,540,20,100);
dustbin3.shapeColor = color(255);
	engine = Engine.create();
  world = engine.world;
  
ground = new Ground(400,600,1200,15);
paper = new Paper(100,570,22);
	
dustbin1 = Bodies.rectangle(width/2+200,540,20,100,{isStatic:true});
	 World.add(world,dustbin1);
	 dustbin2 = Bodies.rectangle(width/2+300,580,200,20,{isStatic:true});
	 World.add(world,dustbin2);
	 dustbin3 = Bodies.rectangle(width/2+400,540,20,100,{isStatic:true});
	 World.add(world,dustbin3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display()
  paper.display()
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}


