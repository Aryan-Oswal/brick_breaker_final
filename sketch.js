var slider;
var edges = [];
var brickGroup;
var ball;
var ballImg;
var tope , bottom, right, left;
var brick1 ,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,brick11,brick12;
var score = 0;
var img;
var living;
var sliderImg;
var a = "";
var GameState = "PLAY"
var lives = ["🫀" , "🫀", "🫀"]
function setup() {
  createCanvas(800,400);
  edges = createEdgeSprites();
  slider = createSprite(400, 350 , 100,10)
  brick1 = createSprite(400, 100 , 80,30)
  brick2 = createSprite(500, 100 , 80,30)
  brick3 = createSprite(600, 100 , 80,30)
  brick4 = createSprite(700, 100 , 80,30)
  brick5 = createSprite(300, 100 , 80,30)
  brick6 = createSprite(200, 100 , 80,30)
  brick7 = createSprite(100, 100 , 80,30)
  brick8 = createSprite(450, 140 , 80,30)
  brick9 = createSprite(550, 140 , 80,30)
  brick10 = createSprite(350, 140 , 80,30)
  brick11 = createSprite(250, 140 , 80,30)
  brick12 = createSprite(400, 180 , 80,30)
  tope = createSprite(400,0,800,10)
  bottom = createSprite(400,400,800,10)
  right = createSprite(800,400,10,800)
  left = createSprite(0,400,10,800)


  brickGroup = createGroup()

  brickGroup.add(
    brick1
    
  )
  brickGroup.add(brick2)
  brickGroup.add(brick3)
  brickGroup.add(brick4)
  brickGroup.add(brick5)
  brickGroup.add(brick6)
  brickGroup.add(brick7)
  brickGroup.add(brick8)
  brickGroup.add(brick9)


  brickGroup.add(brick10)
  brickGroup.add(brick11)
  brickGroup.add(brick12)



  brick1.addImage(img)
  brick2.addImage(img)
  brick3.addImage(img)
  brick4.addImage(img)
  brick5.addImage(img)
  brick6.addImage(img)
  brick7.addImage(img)
  brick8.addImage(img)
  brick9.addImage(img)
  brick10.addImage(img)
  brick11.addImage(img)
  brick12.addImage(img)

  brick10.scale = 0.6
  brick1.scale = 0.6
  brick2.scale = 0.6
  brick3.scale = 0.6
  brick4.scale = 0.6
  brick5.scale = 0.6
  brick6.scale = 0.6
  brick7.scale = 0.6
  brick8.scale = 0.6
  brick9.scale = 0.6
  brick10.scale = 0.6
  brick11.scale = 0.6
  brick12.scale = 0.6


  ball = createSprite(400,300, 15,15)
  ball.addImage(ballImg)
  slider.addImage(sliderImg)
  slider.scale = (0.6)
  ball.scale = 0.2
    ball.debug = true
    ball.setCollider("circle",  0 , 0 ,15 )
  

    


}

function preload(){
  ballImg = loadImage('ball.png')
  img = loadImage('img.png')
  sliderImg = loadImage('slider.png')
}

function draw() {
  background("black");


  if(GameState === "PLAY"){
    text(a ,300 , 350)
    ball.bounceOff(slider)
    ball.bounceOff(tope)
    ball.bounceOff(right)
    ball.bounceOff(left)

    for(var i = 0; i < brickGroup.length; i++ ){
      if(ball.isTouching(brickGroup.get(i))){
        console.log("whgdbbx")
        brickGroup.get(i).destroy()
        score = score + 20
      }
    }

    if(ball.isTouching(slider)){
      ball.velocityY = ball.velocityY + 2
      ball.velocityX = ball.velocityY - 0.9
    }

    if(ball.isTouching(bottom)){
      lives.pop();
      console.log(lives.length)
      ball.x = 400;
      ball.y = 300;
      ball.velocityX = 0;
      ball.velocityY = 0;
      
    }

      
      if(ball.velocityY === 0 && ball.velocityX === 0){
        a = "PRESS SPACE TO START"
      }
      if(ball.velocityY !== 0 || ball.velocityX !== 0){
        a = ""
      }

    

  
    slider.x = mouseX
  }

  
   if(lives.length === 0){
     GameState = "END"
    }
    if(GameState === "END"){
      textSize(20)
      text("You have lost PRESS `R` to START AGAIN" , 250 , 330)
    }
  text( "Your score -:" + " " +score , 700, 30)
  text( "Your have" + " " + lives, 100, 30)


  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    ball.velocityY = ball.velocityY + 2
    ball.velocityX = ball.velocityX - 0.9
    
  }

  if(keyCode === 82){
    
    GameState = "PLAY"
    lives = ["🫀","🫀","🫀"]
    
  }
}