var tom, tomIm1, tomIm2, tomIm3;
var jerry, jerryIm1, jerryIm2, jerryIm3;
var backGrIm;

function preload() 
{
   jerryIm1 = loadImage("images/jerryOne.png");
   jerryIm2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
   jerryIm3 = loadImage("images/jerryFour.png");
   tomIm1 = loadImage("images/tomOne.png");
   tomIm2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
   tomIm3 = loadImage("images/tomFour.png");
   backGrIm = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,700);
    jerry = createSprite(110,500);
    jerry.addImage(jerryIm1);
    jerry.scale = 0.2;   

    tom = createSprite(800,500);
    tom.addImage(tomIm1);
    tom.scale = 0.2;    
}

function draw() {
    background(backGrIm);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
      tom.velocityX = 0;
      tom.addAnimation("catLastIm",tomIm3);
      tom.changeAnimation("catLastIm"); 
      jerry.addAnimation("jerryLastIm",jerryIm3);
      jerry.changeAnimation("jerryLastIm");
      tom.x = 250;
      tom.y = 500     
    }
   
    drawSprites();
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tomRunning",tomIm2);
    tom.changeAnimation("tomRunning");
    jerry.addAnimation("jerryMoving",jerryIm2);
    jerry.changeAnimation("jerryMoving");
  }
}
