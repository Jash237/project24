
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    paper = Matter.Bodies.circle(600,650,10,25);

	engine = Engine.create();
	world = engine.world;

	dustbin1 = new dustbin;
	dustbin1 = createSprite(750,690,80,10);

	dustbin2 = new dustbin;
	dustbin2 = createSprite(710,670,10,60);

	dustbin3 = new dustbin;
	dustbin3 = createSprite(790,670,10,60) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keycode --- UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}

