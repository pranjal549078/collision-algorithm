var fixedRect, movingRect,g1,g2,g3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  g1 = createSprite(200,200,50,50);
  g1.shapeColor= "green";

  
  g2 = createSprite(400,200,50,50);
  g2.shapeColor= "green";

  
  g3 = createSprite(600,200,50,50);
  g3.shapeColor= "green";
}
function draw() {
  background(255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  if( isTouching(movingRect,g1))
  {
    text("HI",50,50)
  }else if(isTouching(movingRect,g2))
  {
    text("hi",50,20);
  }else
  {
    fixedRect.shapeColor = "yellow";
  }
  drawSprites();
}
function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 

    {
      return true;
    }
else {
       return false;
     }

}