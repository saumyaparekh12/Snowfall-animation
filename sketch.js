//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;


var snowman,snowmanImg,hailstoneImg;
var ball1;



function preload(){
  snowBg = loadImage("snow1.jpg");
  snowmanImg = loadImage("snowman.png");
  hailstoneImg = loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);

  //engine = Engine.create();
  //world = engine.world;

  snowman = createSprite(400, 200, 50, 50);
  snowman.addImage("snowman",snowmanImg);
  snowman.scale = 0.4;

  
  //ball1 = new snowFall(200,200);
  

  //Engine.run(engine);

}

function draw() {
  background(snowBg); 

  //ball1.display();

  if(frameCount%100 === 0){
    var snowfall = createSprite(random(30,780),-20,50,50);
    snowfall.velocityY = 5;
    snowfall.addImage("hailstone",hailstoneImg);
    snowfall.scale = 0.15;
  }
  

  //moving up
  if(keyDown("up")){
    snowman.velocityY = -5;
  } else{
    snowman.velocityY = 0;
    snowman.velocityX = 0;
  }

  //moving down
  if(keyDown("down")){
    snowman.velocityY = 5;
  }

  //moving right
  if(keyDown("right")){
    snowman.velocityX = 5;
  }

  //moving left
  if(keyDown("left")){
    snowman.velocityX = -5;
  }

   
  drawSprites();
}

