var ninja,ninjaIMG,ninjaIMG2,obstacle_grp,ninja_starIMG;
var background_,ground,backgroundIMG;
var Gameover,GameoverIMG,Restart,RestartIMG;
var Start,StartIMG,flame,spike,bgm;
var gameState;
function preload(){

    ninjaIMG = loadAnimation("images/b.png","images/c.png","images/d.png","images/e.png","images/f.png")
ninjaIMG2 = loadImage("images/dodge.png");
backgroundIMG=loadImage("images/bg.png");
ninja_starIMG=loadAnimation("images/1.png","images/1 - Copy.png","images/2 (2).png","images/2.png")
flame=loadAnimation("images/ob1.png","images/ob2.png");
spike=loadAnimation("images/ob3.png","images/ob4.png");

ninjaIMG2=loadImage("images/dodge.png");

startIMG=loadImage("images/start.png")

bgm=loadSound("hi.mp3")


}



function setup(){
    createCanvas(1000,700);

    i=1;



   

    gameState=2;

background_=createSprite(1899+75+100,900,20,20);
background_.addImage(backgroundIMG);
background_.velocityX=-5;
background_.scale=1.1

    Start=createSprite(500,350,20,20);
    Start.scale=.5;
    Start.addImage(startIMG);

ground=createSprite(500,675,1000,10);
ground.visible=false;


obstacle_grp=new Group ();

    
    ninja=createSprite(100,625,20,20);
    ninja.addAnimation("background",ninjaIMG);
    ninja.scale=0.25;
  

}

function draw(){
 

    console.log(gameState)

    if(gameState ==1){

        background_.velocityX=-5
        ninja.visible= true;

        Start.visible=false;

if(ninja.collide(obstacle_grp)){
    gameState = 2
}


if (background_.x<-950){

    background_.x=950+200
}
   ninja.velocityY = ninja.velocityY+1;

spawnObstacles();

    if(keyDown("space")&&ninja.y>600){
        ninja.velocityY=-17;


    }
    }else{
        if (gameState == 2){
                    background_.velocityX=0;
        obstacle_grp.destroyEach();
        ninja.velocityX=0;
        ninja.visible=false;
        Start.visible=true;

if(mousePressedOver(Start)){
    gameState=1
    bgm.play();
}

        }

    }




background("grey");



   ninja.collide(ground)


drawSprites();

if(gameState == 2){

    bgm.stop();

           console.log("hi");
        fill("white")
        textSize(22);

    text("GAMEOVER",500,350,20,20)
   
        
            }
        }




function spawnObstacles() {
    if(frameCount % 120 === 0) {
      var obstacle = createSprite(1000,650,10,40);
      obstacle_grp.add(obstacle)

      obstacle.velocityX =-5
      //generate random obstacles
      var rand = Math.round(random(1,3));
      switch(rand) {
        case 1: obstacle.addAnimation("background",ninja_starIMG);
        obstacle.scale=0.05
        obstacle.velocityX =-8
                break;
        case 2: obstacle.addAnimation("background",flame);
        obstacle.scale=0.5
 
                break;
        case 3: obstacle.addAnimation("background",spike);
        obstacle.scale=0.5
    
                break;

        default: break;
      }}}