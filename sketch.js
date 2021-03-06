const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
var ground1;
var block1;
var hex1;
var slingShot;


function setup() {
createCanvas(800,400);
engine = Engine.create();
world = engine.world
ground1 = new Ground(100,400, 1500,20);
block1 = new Ground(600, 235, 250, 20);
block2 = new Ground(300, 350, 350, 20);
box1 = new Box(490, 210, 50, 50)
box2 = new Box(530, 210, 50, 50)
box3 = new Box(560, 210, 50, 50)
box4 = new Box(610, 210, 50, 50)
box5 = new Box(660, 210, 50, 50)
box6 = new Box(530, 180, 50, 50)
box7 = new Box(560, 180, 50, 50)
box8 = new Box(610, 180, 50, 50)
box9 = new Box(610, 150, 50, 50)
box10 = new Box(560, 150, 50, 50)
box11 = new Box(200, 310, 50, 50)
box12 = new Box(250, 310, 50, 50)
box13 = new Box(300, 310, 50, 50)
box14 = new Box(350, 310, 50, 50)
box15 = new Box(400, 310, 50, 50)
box16 = new Box(250, 280, 50, 50)
box17 = new Box(300, 280, 50, 50)
box18 = new Box(350, 280, 50, 50)
box19 = new Box(300, 250, 50, 50)
box20 = new Box(350, 250, 50, 50)
box21 = new Box(320, 220, 50, 50)
hex1 = new Hex(200,200)
slingShot = new SlingShot(hex1.body,{x:200, y:200});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground1.display();
  block1.display();
  block2.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  slingShot.display();
  hex1.display();
  noStroke();
  fill("black");
  textSize(35);
  text("score:"+score,600,100);

  
  //mouseDragged();
  //mouseReleased();
  //keyPressed();
  
}

function mouseDragged() {
  Matter.Body.setPosition(hex1.body, {x: mouseX , y: mouseY});

}


function mouseReleased() {
  slingShot.fly();
  
}
function keyPressed(){
  if (keyCode===32){
      slingShot.attach(hex1.body)
     Matter.Body.setPosition(hex1.body,{x:200, y:200})
  }
}

/*function scorefn(obj){
  if ((obj.visiblity!=undefined) &&(obj.visiblity===NaN)) { //}==="undefined"){ //&& obj.visiblity> - 405){
//
//console.log(obj);

  score = score + 1;
}
}
console.log(scorefn)
*/