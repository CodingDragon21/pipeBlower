const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var pipe1
var pipe2
var ball
var button
var gameOver 

function preload(){
gameOver = loadImage("gameOver.svg")
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

pipe1 = new Pipes(400,370, 500,30)
pipe2 = new Pipes(600,325, 100,70)
ball = new Ball(600,300, 20)

button = createButton("Click to Blow")
button.position(100,200)
button.class("blowButton")
button.mousePressed(blow)

}

function draw() {
  background(51);

  Engine.update(engine);
pipe1.show()
ball.show()
pipe2.show()
if(ball.body.position.y > 400){
  image(gameOver,300,100,300,100)
}


}
function blow(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.02})
}

