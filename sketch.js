const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerBase;
var cpu,cpuBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerBase = new PlayerBase(windowWidth/4,random(450,height -300),180,150);
   player = new Player(windowWidth/4,playerBase.body.position.y - 153,50,180);

   cpuBase = new ComputerBase(windowWidth/2,random(450,height -300),180,150);
   cpu = new CPU(windowWidth/2,cpuBase.body.position.y - 153,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
cpu.display();
player.display();
playerBase.display();
cpuBase.display();

   //display Player and computerplayer


}
