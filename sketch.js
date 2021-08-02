
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball,ground

function setup()
{
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world

var options={
  isStatic:true
}

  ground=Bodies.rectangle(200,350,400,10,options);

  World.add(world,ground)

  var options={
    restitution:0.8
  }
  
    ball=Bodies.circle(200,50,10,options);
  
    World.add(world,ball)
}

function draw() 
{
  background(51);

  Engine.update(engine)
  rectMode(CENTER)

  rect(ground.position.x,ground.position.y,400,10)
  
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,10,10)

}

