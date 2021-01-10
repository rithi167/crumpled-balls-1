
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var bin1, bin2, bin3;
var groundObject;

function setup() 
{
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	
	bin1=new GarbageBin(1200,200,20,100,{isStatic:true});
	bin2=new GarbageBin(1100,200,180,20,{isStatic:true});
	bin3=new GarbageBin(1000,200,20,100,{isStatic:true});
	paperball = new Paper(200,450,40);
	groundObject=new Ground(width/2,690,width,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bin1.display();
  bin2.display();
  bin3.display();
  paperball.display();
  groundObject.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body, paperball.body.position,{x:85,y:-85});
	}
}



