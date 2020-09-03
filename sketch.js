
var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400, 200, 50, 30);
  movingRect.debug =true;
  movingRect.shapeColor="green"

  fixedRect = createSprite(200,200,50,80)
  fixedRect.debug =true;
  fixedRect.shapeColor ='green'

}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y =mouseY;
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 ||
   movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 )
    {
   
    movingRect.velocityX=5;
    movingRect.velocityY=5;
  
  }

   if( fixedRect.x-movingRect.x< movingRect.width/2+fixedRect.width/2||
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2) {
       movingRect.velocityX=-5;
       movingRect.velocityY=-5;
    }
drawSprites();

}






drawSprites();
}