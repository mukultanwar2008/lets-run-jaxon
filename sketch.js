var Jake;
var path;
var invisibleleftboundary;
var invisiblerightboundary;
function preload(){
  JakeImg  = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
   pathImage = loadImage("path.png");
 
  
  
}

function setup(){
  createCanvas(400,400);
  
  
  path = createSprite(170,200);
  //path.y = path.width/2;
  path.scale = 1.3;
  //velocity to the path
  path.velocityY = 2;
  path.addImage(pathImage);
  path.velocityY = 3;
  
 
  Jake = createSprite(100,160,20,50);
  Jake.addAnimation("Jake_moving",JakeImg);
  edges = createEdgeSprites();
  //adding scale and position to Jake
  Jake.scale = 1.3;
 
  invisibleleftboundary = createSprite(10,200,30,400);

    
    invisiblerightboundary = createSprite(395,200,30,400);
    }
    
    


function draw(){
  //set background color 
  background("white");
  Jake.x = mouseX
  //logging the y position of the path
  console.log(path.y)
  
 
if(path.y>400){
path.y = height/2;

}
  
  invisibleleftboundary.visible = false;
  invisiblerightboundary.visible = false;
  Jake.collide(invisibleleftboundary);
  Jake.collide(invisiblerightboundary);
  
  
  
  
 
  
  
  drawSprites();
}

