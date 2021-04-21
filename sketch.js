const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg = "snow1.jpg"
var snows = []
var backgroundImg
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  Engine.update(engine); 
}
function preload(){
  getBackgroundImg();
}
function draw() {
  if(backgroundImg){
    background(backgroundImg);
}
 
  // if(frameCount%70===0){
  //   snows.push(new Snow(random(10,800),10, 0, 0))
  // }
  for (var z = 0; z < snows.length; z++) {
    snows[z].display();
  }
  drawSprites();
}
async function getBackgroundImg(){

  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata") 
  var responseJson = await response.json();
  var dateTime = responseJson.datetime;
  var hour = dateTime.slice(11,13);
  console.log(dateTime)
  if(hour>=06 && hour<=14){
    bg = "snow1.jpg";
}
else if (hour>=14 && hour<=22){
    bg = "snow2.jpg";
}
else if (hour>=22 && hour<=06){
    bg = "snow3.jpg";
}
backgroundImg = loadImage(bg);
}