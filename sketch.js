const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruitCon;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  fruit = Bodies.circle(250,350,25);
  World.add(world,fruit);

  rope = new Rope(8,{x:250, y:40})

  fruitCon = new Link(rope, fruit);
  
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);

  console.log("mouse x:, mouse y: " + mouseX + ","  + mouseY);

  rope.show();

  ellipse(fruit.position.x, fruit.position.y, 25);
  

 
   
}
