
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create the Bodies Here
	roof1=new Ground(400,25,1600,50)
	roof2=new Ground(600,25,1600,50)
	
	roof3=new Ground(800,25,1600,50)
	roof4=new Ground(1000,25,1600,50)
	roof5=new Ground(1200,25,1600,50)
	ball1=new Ball(400,500,100)
	ball2=new Ball(600,500,100)

	ball3=new Ball(800,500,100)
	ball4=new Ball(1000,500,100)
	ball5=new Ball(1200,500,100)

	chain1=new Chain(roof1.body,ball1.body)
	chain2=new Chain(roof2.body,ball2.body)
	chain3=new Chain(roof3.body,ball3.body)
	chain4=new Chain(roof4.body,ball4.body)
	chain5=new Chain(roof5.body,ball5.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof3.display();
  chain1.display();
  ball1.display();
  chain2.display();
  ball2.display();
  chain3.display();
  ball3.display();
  chain4.display();
  ball4.display();
  chain5.display();
  ball5.display();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-20,y:-20})
	}
}

function mouseDragged(){
matter.Body.setposition(pendulum.body,{x:mouseX,y:mouseY});
}



