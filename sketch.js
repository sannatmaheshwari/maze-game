function preload(){
bg = loadImage("images/bg.jpg")
hunterimg1 = loadAnimation("images/hunter.png")
hunterimg2 = loadAnimation("images/hunter.2.png")
log=loadImage("images/log.png")
anvil = loadImage("images/anvil.png")
spider=loadImage("images/spider.png")

}

function setup() {
  createCanvas(1500,700);
  edges=createEdgeSprites()
 hunter = createSprite(50,30,10,10)
 hunter.addAnimation("hunter1",hunterimg1)
 hunter.addAnimation("hunter2",hunterimg2)
 hunter.scale = 0.25
 hunter.debug=false
 hunter.setCollider("rectangle",0,20,100,280)

 lives = 3
 scores = 0

 
 log1=createSprite(40,100,390,20)
log2 = createSprite(360,45,20,100)
log3 = createSprite(120,230,100,20)
log4 = createSprite(230,185,20,150)
log5 = createSprite(400,105,100,20)
log6 = createSprite(360,390,20,240)
log7 = createSprite(110,350,220,20)
log8 = createSprite(280,500,140,20)
log9 = createSprite(50,500,100,20)
log10 = createSprite(460,235,20,280)
log11 = createSprite(800,500,700,20)
log12 = createSprite(360,560,20,100)
log13 = createSprite(820,600,900,20)
log14 = createSprite(1260,540,20,100)
log15 = createSprite(560,235,20,280)
log16 = createSprite(680,385,260,20)
log17 = createSprite(1200,385,600,20)
log18 = createSprite(1255,240,20,270)//18
log19 = createSprite(1140,450,20,110)
log20 = createSprite(915,105,700,20)
log21 = createSprite(800,290,20,200)
log22 = createSprite(600,260,100,20)
log23 = createSprite(1200,260,100,20)//23
log24 = createSprite(910,290,20,200)
log25 = createSprite(1300,500,100,20)
log26 = createSprite(1340,600,20,200)
log27 = createSprite(360,660,20,100)
log28 = createSprite(1380,300,20,150)
log29 = createSprite(1380,235,230,20)


drop1 = createSprite(395,160,20,20)
drop1.addImage(anvil)
drop1.scale = 0.1
drop1.setCollider("circle",0,0,150)

drop2 = createSprite(850,150,20,20)
drop2.addImage(anvil)
drop2.scale = 0.1
drop2.setCollider("circle",0,0,150)

drop3 = createSprite(1380,150,20,20)
drop3.addImage(anvil)
drop3.scale = 0.1
drop3.setCollider("circle",0,0,150)

drop4 = createSprite(800,550,20,20)
drop4.addImage(anvil)
drop4.scale = 0.1
drop4.setCollider("circle",0,0,150)

drop1.velocityX=-2
drop1.velocityY=-3

drop2.velocityX=-4
drop2.velocityY=-3

drop3.velocityX=1
drop3.velocityY=4

drop4.velocityX=5
drop4.velocityY=2

drops=[drop1,drop2,drop3,drop4]

spider1 = createSprite(280,600,20,20)
spider1.addImage(spider)
spider1.scale = 0.3
spider1.velocityX = 2;
spider1.velocityY = 2;

spider2 = createSprite(700,460,20,20)
spider2.addImage(spider)
spider2.scale = 0.3
spider2.velocityX = 2;
spider2.velocityY = 2;

spider3 = createSprite(1420,160,20,20)
spider3.addImage(spider)
spider3.scale = 0.3
spider3.velocityX = 2;
spider3.velocityY = 2;

spider4 = createSprite(1160,330,20,20)
spider4.addImage(spider)
spider4.scale = 0.3
spider4.velocityX = 2;
spider4.velocityY = 2;

spider5 = createSprite(140,190,20,20)
spider5.addImage(spider)
spider5.scale = 0.3
spider5.velocityX = 2;
spider5.velocityY = 2;

spiders =[spider1,spider2,spider3,spider4,spider5]
bulletsGroup = createGroup()
}

function draw() {
  background(bg); 
  drawSprites();
  textSize(15)
  fill(255)
  text(mouseX+","+mouseY,mouseX,mouseY)

  textSize(25)
  stroke("white")
  fill("white")
  textAlign(CENTER)
  text("Lives = "+lives,80,660)
  text("Scores = "+scores,1420,660)

  hunter.collide(edges)
  hunter.collide(log1)
  hunter.collide(log2)
  hunter.collide(log3)
  hunter.collide(log4)
  hunter.collide(log5)
  hunter.collide(log6)
  hunter.collide(log7)
  hunter.collide(log8)
  hunter.collide(log9)
  hunter.collide(log10)
  hunter.collide(log11)
  hunter.collide(log12)
  hunter.collide(log13)
  hunter.collide(log14)
  hunter.collide(log15)
  hunter.collide(log16)
  hunter.collide(log17)
  hunter.collide(log18)
  hunter.collide(log19)
  hunter.collide(log20)//20
  hunter.collide(log21)
  hunter.collide(log22)
  hunter.collide(log23)
  hunter.collide(log24)//24
  hunter.collide(log25)
  hunter.collide(log27)
  hunter.collide(log28)
   
  drop1.bounceOff(log1)
  drop1.bounceOff(log2)
  drop1.bounceOff(log3)
  drop1.bounceOff(log4)
  drop1.bounceOff(log5)
  drop1.bounceOff(log6)
  drop1.bounceOff(log7)
  drop1.bounceOff(log8)
  drop1.bounceOff(log9)
  drop1.bounceOff(log10)
  drop1.bounceOff(log11)
  drop1.bounceOff(log12)
  drop1.bounceOff(log13)
  drop1.bounceOff(log14)
  drop1.bounceOff(log15)
  drop1.bounceOff(log16)
  drop1.bounceOff(log17)
  drop1.bounceOff(log18)
  drop1.bounceOff(log19)
  drop1.bounceOff(log20)
  drop1.bounceOff(log21)
  drop1.bounceOff(log22)
  drop1.bounceOff(log23)
  drop1.bounceOff(log24)
  drop1.bounceOff(log25)
  drop1.bounceOff(log26)
  drop1.bounceOff(log27)
  drop1.bounceOff(log28)
  drop1.bounceOff(log29)
  drop1.bounceOff(edges)

  drop2.bounceOff(log1)
  drop2.bounceOff(log2)
  drop2.bounceOff(log4)
  drop2.bounceOff(log5)
  drop2.bounceOff(log6)
  drop2.bounceOff(log7)
  drop2.bounceOff(log8)
  drop2.bounceOff(log9)
  drop2.bounceOff(log11)
  drop2.bounceOff(log12)
  drop2.bounceOff(log13)
  drop2.bounceOff(log14)
  drop2.bounceOff(log15)
  drop2.bounceOff(log16)
  drop2.bounceOff(log17)
  drop2.bounceOff(log18)
  drop2.bounceOff(log19)
  drop2.bounceOff(log20)
  drop2.bounceOff(log21)
  drop2.bounceOff(log22)
  drop2.bounceOff(log23)
  drop2.bounceOff(log24)
  drop2.bounceOff(log25)
  drop2.bounceOff(log26)
  drop2.bounceOff(log27)
  drop2.bounceOff(log28)
  drop2.bounceOff(log29)
  drop2.bounceOff(edges)
  
  drop3.bounceOff(log1)
  drop3.bounceOff(log2)
  drop3.bounceOff(log3)
  drop3.bounceOff(log4)
  drop3.bounceOff(log5)
  drop3.bounceOff(log6)
  drop3.bounceOff(log7)
  drop3.bounceOff(log8)
  drop3.bounceOff(log9)
  drop3.bounceOff(log10)
  drop3.bounceOff(log11)
  drop3.bounceOff(log12)
  drop3.bounceOff(log13)
  drop3.bounceOff(log14)
  drop3.bounceOff(log15)
  drop3.bounceOff(log16)
  drop3.bounceOff(log17)
  drop3.bounceOff(log18)
  drop3.bounceOff(log19)
  drop3.bounceOff(log20)
  drop3.bounceOff(log21)
  drop3.bounceOff(log22)
  drop3.bounceOff(log23)
  drop3.bounceOff(log24)
  drop3.bounceOff(log25)
  drop3.bounceOff(log26)
  drop3.bounceOff(log27)
  drop3.bounceOff(log28)
  drop3.bounceOff(log29)
  drop3.bounceOff(edges)
 
  drop4.bounceOff(log1)
  drop4.bounceOff(log2)
  drop4.bounceOff(log3)
  drop4.bounceOff(log4)
  drop4.bounceOff(log5)
  drop4.bounceOff(log6)
  drop4.bounceOff(log7)
  drop4.bounceOff(log8)
  drop4.bounceOff(log9)
  drop4.bounceOff(log10)
  drop4.bounceOff(log11)
  drop4.bounceOff(log12)
  drop4.bounceOff(log13)
  drop4.bounceOff(log14)
  drop4.bounceOff(log15)
  drop4.bounceOff(log16)
  drop4.bounceOff(log17)
  drop4.bounceOff(log18)
  drop4.bounceOff(log19)
  drop4.bounceOff(log20)
  drop4.bounceOff(log21)
  drop4.bounceOff(log22)
  drop4.bounceOff(log23)
  drop4.bounceOff(log24)
  drop4.bounceOff(log25)
  drop4.bounceOff(log26)
  drop4.bounceOff(log27)
  drop4.bounceOff(log28)
  drop4.bounceOff(log29)
  drop4.bounceOff(edges)

  spider1.bounceOff(log1)
  spider1.bounceOff(log2)
  spider1.bounceOff(log3)
  spider1.bounceOff(log4)
  spider1.bounceOff(log5)
  spider1.bounceOff(log6)
  spider1.bounceOff(log7)
  spider1.bounceOff(log8)
  spider1.bounceOff(log9)
  spider1.bounceOff(log10)
  spider1.bounceOff(log11)
  spider1.bounceOff(log12)
  spider1.bounceOff(log13)
  spider1.bounceOff(log14)
  spider1.bounceOff(log15)
  spider1.bounceOff(log16)
  spider1.bounceOff(log17)
  spider1.bounceOff(log18)
  spider1.bounceOff(log19)
  spider1.bounceOff(log20)
  spider1.bounceOff(log21)
  spider1.bounceOff(log22)
  spider1.bounceOff(log23)
  spider1.bounceOff(log24)
  spider1.bounceOff(log25)
  spider1.bounceOff(log26)
  spider1.bounceOff(log27)
  spider1.bounceOff(log28)
  spider1.bounceOff(log29)
  spider1.bounceOff(edges)

  spider2.bounceOff(log1)
  spider2.bounceOff(log2)
  spider2.bounceOff(log3)
  spider2.bounceOff(log4)
  spider2.bounceOff(log5)
  spider2.bounceOff(log6)
  spider2.bounceOff(log7)
  spider2.bounceOff(log8)
  spider2.bounceOff(log9)
  spider2.bounceOff(log10)
  spider2.bounceOff(log11)
  spider2.bounceOff(log12)
  spider2.bounceOff(log13)
  spider2.bounceOff(log14)
  spider2.bounceOff(log15)
  spider2.bounceOff(log16)
  spider2.bounceOff(log17)
  spider2.bounceOff(log18)
  spider2.bounceOff(log19)
  spider2.bounceOff(log20)
  spider2.bounceOff(log21)
  spider2.bounceOff(log22)
  spider2.bounceOff(log23)
  spider2.bounceOff(log24)
  spider2.bounceOff(log25)
  spider2.bounceOff(log26)
  spider2.bounceOff(log27)
  spider2.bounceOff(log28)
  spider2.bounceOff(log29)
  spider2.bounceOff(edges)

  spider3.bounceOff(log1)
  spider3.bounceOff(log2)
  spider3.bounceOff(log3)
  spider3.bounceOff(log4)
  spider3.bounceOff(log5)
  spider3.bounceOff(log6)
  spider3.bounceOff(log7)
  spider3.bounceOff(log8)
  spider3.bounceOff(log9)
  spider3.bounceOff(log10)
  spider3.bounceOff(log11)
  spider3.bounceOff(log12)
  spider3.bounceOff(log13)
  spider3.bounceOff(log14)
  spider3.bounceOff(log15)
  spider3.bounceOff(log16)
  spider3.bounceOff(log17)
  spider3.bounceOff(log18)
  spider3.bounceOff(log19)
  spider3.bounceOff(log20)
  spider3.bounceOff(log21)
  spider3.bounceOff(log22)
  spider3.bounceOff(log23)
  spider3.bounceOff(log24)
  spider3.bounceOff(log25)
  spider3.bounceOff(log26)
  spider3.bounceOff(log27)
  spider3.bounceOff(log28)
  spider3.bounceOff(log29)
  spider3.bounceOff(edges)

  spider4.bounceOff(log1)
  spider4.bounceOff(log2)
  spider4.bounceOff(log3)
  spider4.bounceOff(log4)
  spider4.bounceOff(log5)
  spider4.bounceOff(log6)
  spider4.bounceOff(log7)
  spider4.bounceOff(log8)
  spider4.bounceOff(log9)
  spider4.bounceOff(log10)
  spider4.bounceOff(log11)
  spider4.bounceOff(log12)
  spider4.bounceOff(log13)
  spider4.bounceOff(log14)
  spider4.bounceOff(log15)
  spider4.bounceOff(log16)
  spider4.bounceOff(log17)
  spider4.bounceOff(log18)
  spider4.bounceOff(log19)
  spider4.bounceOff(log20)
  spider4.bounceOff(log21)
  spider4.bounceOff(log22)
  spider4.bounceOff(log23)
  spider4.bounceOff(log24)
  spider4.bounceOff(log25)
  spider4.bounceOff(log26)
  spider4.bounceOff(log27)
  spider4.bounceOff(log28)
  spider4.bounceOff(log29)
  spider4.bounceOff(edges)

  spider5.bounceOff(log1)
  spider5.bounceOff(log2)
  spider5.bounceOff(log3)
  spider5.bounceOff(log4)
  spider5.bounceOff(log5)
  spider5.bounceOff(log6)
  spider5.bounceOff(log7)
  spider5.bounceOff(log8)
  spider5.bounceOff(log9)
  spider5.bounceOff(log10)
  spider5.bounceOff(log11)
  spider5.bounceOff(log12)
  spider5.bounceOff(log13)
  spider5.bounceOff(log14)
  spider5.bounceOff(log15)
  spider5.bounceOff(log16)
  spider5.bounceOff(log17)
  spider5.bounceOff(log18)
  spider5.bounceOff(log19)
  spider5.bounceOff(log20)
  spider5.bounceOff(log21)
  spider5.bounceOff(log22)
  spider5.bounceOff(log23)
  spider5.bounceOff(log24)
  spider5.bounceOff(log25)
  spider5.bounceOff(log26)
  spider5.bounceOff(log27)
  spider5.bounceOff(log28)
  spider5.bounceOff(log29)
  spider5.bounceOff(edges)

for(var i in drops){
 if(drops[i].isTouching(hunter)){
    lives-=1
    hunter.x = 50
    hunter.y = 30
 }
}

for(var i in spiders){
  if(spiders[i].isTouching(hunter)){
    lives-=1
    hunter.x = 50
    hunter.y = 30
  }
}
 
 if(lives === 0){
  textSize(50)
  stroke("yellow")
  fill("yellow")
  textAlign(CENTER)
  text("GAME OVER",750,350)
 
  hunter.x = 50
  hunter.y = 30

  hunter.velocityX = 0
  hunter.velocityY = 0
  
  drop1.velocityX=0
  drop1.velocityY=0

  drop2.velocityX = 0
  drop2.velocityY = 0
 
  drop3.velocityX=0
  drop3.velocityY=0

  drop4.velocityX=0
  drop4.velocityY=0

  spider1.velocityX = 0
  spider1.velocityY = 0

  spider2.velocityX = 0
  spider2.velocityY = 0

  spider3.velocityX = 0
  spider3.velocityY = 0

  spider4.velocityX = 0
  spider4.velocityY = 0

  spider5.velocityX = 0
  spider5.velocityY = 0

 }
  
  if(keyDown("right")){
    hunter.x+=2
    hunter.changeAnimation("hunter1")
    if(keyDown("space")&&frameCount%20===0){
      bullets()
    }
  }
  if(keyDown("left")){
    hunter.x-=2
    hunter.changeAnimation("hunter2")
    bulletsGroup.setVelocityXEach(-5)
    
    if(keyDown("space")&&frameCount%20===0){
      bullets()
    }
  }
  if(keyDown("up")){
    hunter.y-=2
    if(keyDown("space")&&frameCount%20===0){
      bullets()
    }
  }
  if(keyDown("down")){
    hunter.y+=2
    if(keyDown("space")&&frameCount%20===0){
      bullets()
    }
  }

  if(keyDown("space")&&frameCount%20===0){
    bullets()
  }

  if(bulletsGroup.isTouching(log1)||bulletsGroup.isTouching(log2)||
  bulletsGroup.isTouching(log3)||bulletsGroup.isTouching(log4)||
  bulletsGroup.isTouching(log5)||bulletsGroup.isTouching(log6)||
  bulletsGroup.isTouching(log7)||bulletsGroup.isTouching(log8)||
  bulletsGroup.isTouching(log9)||bulletsGroup.isTouching(log10)||
  bulletsGroup.isTouching(log11)||bulletsGroup.isTouching(log12)||
  bulletsGroup.isTouching(log13)||bulletsGroup.isTouching(log14)||
  bulletsGroup.isTouching(log15)||bulletsGroup.isTouching(log16)||
  bulletsGroup.isTouching(log17)||bulletsGroup.isTouching(log18)||
  bulletsGroup.isTouching(log19)||bulletsGroup.isTouching(log20)||
  bulletsGroup.isTouching(log21)||bulletsGroup.isTouching(log22)||
  bulletsGroup.isTouching(log23)||bulletsGroup.isTouching(log24)||
  bulletsGroup.isTouching(log25)||bulletsGroup.isTouching(log26)||
  bulletsGroup.isTouching(log27)||bulletsGroup.isTouching(log28)||
  bulletsGroup.isTouching(log29)||bulletsGroup.isTouching(edges)||
  bulletsGroup.isTouching(drop1)||bulletsGroup.isTouching(drop2)||
  bulletsGroup.isTouching(drop3)||bulletsGroup.isTouching(drop4)
  ){
    bulletsGroup[0].destroy()
  }
  
 for(var i in spiders){
  if(bulletsGroup.isTouching(spiders[i])){
    spiders[i].destroy()
    bulletsGroup[0].destroy()
    scores+=10
  }
}

  imageMode(CENTER)
  image(log,40,100,400,20)
  image(log,360,45,20,100)
  image(log,120,230,100,20)
  image(log,230,185,20,150)
  image(log,400,105,100,20)
  image(log,360,390,20,240)
  image(log,110,350,220,20)
  image(log,280,500,140,20)
  image(log,50,500,100,20)
  image(log,460,235,20,280)//10
  image(log,800,500,700,20)
  image(log,360,560,20,100)
  image(log,820,600,900,20)
  image(log,1260,540,20,100)//14
  image(log,560,235,20,280)
  image(log,680,385,260,20)
  image(log,1200,385,600,20)
  image(log,1255,240,20,270)
  image(log,1140,450,20,110)//19
  image(log,915,105,700,20)
  image(log,800,290,20,200)
  image(log,600,260,100,20)
  image(log,1200,260,100,20)//23
  image(log,910,290,20,200)
  image(log,1300,500,100,20)
  image(log,1340,600,20,200)
  image(log,360,660,20,100)//27
  image(log,1380,300,20,150)
  image(log,1380,235,230,20)
  
}

  
function bullets(){
  bullet = createSprite(hunter.x,hunter.y-5,10,10)
  bullet.velocityX = 5
  bulletsGroup.add(bullet)
}
  
