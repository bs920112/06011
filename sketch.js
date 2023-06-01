//let points = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4]
//,[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2],[1,2]]; //list資料，小羊的座標點

let points = [[2,2],[3,3],[2,3],[4,4],[3,5],[2,4],[3,6],[6,5],[8,6],[9,6],[7,4],[8,4],
  [8,3],[9.54,3.34],[9,2],[7,1],[6,-6],[3,-6],[4,-3],[-3,-3],[-4,-6],[-7,-6],[-6,1],[-7,5],[-6,7],[-4,7],[-5,5],[-4,2]]///list 
var fill_colors = "ef798a-f7a9a8-7d82b8-613f75-e5c3d1".split("-").map(a=>"#"+a)
var line_colors = "ff595e-ffca3a-8ac926-1982c4-6a4c93".split("-").map(a=>"#"+a)

///class:類別，粒子


//飛彈的定義
 var ball ///目前要處理的物件，暫時放ball變數內
 var balls = []///把產生的所有物件
///畫point所有點的物件定義 
 var bullet ///目前要處理的物件，暫時放bullet變數內
 var bullets = []///把產生的所有物件
 
 var score = 0///計分

 function preload(){///程式碼執行之前，比set up更早執行
 sheep_sound = loadSound("sound/Launching wire.wav")
 bullet_sound = loadSound("sound/wash.mp3")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i=0;i<10;i=i+1){///i=0、1、2、3....9
    ball = new Obj ({})///產生一個新的Obj class元件
    balls.push(ball)//把ball的物件放入到balls陣列內
  }
}

function draw() {
background(220);
//for(var j=0;j<balls.length;j=j+1){
  //ball = balls[j]
  //ball.draw()
  //ball.update()
 //}

 //大象的顯示
 for(let ball of balls){//只要是陣列的方式都可以用此方式
  ball.draw()
  ball.update()
  for(let bullet of  bullets){ //檢查每一飛彈物件
    if( ball.isBallInRanger( bullet.p.x, bullet.p.y)){   //飛彈物件有無接觸現在的ball        
     balls.splice(balls.indexOf(ball),1)///從倉庫balls取出被按滑鼠的物件編號(balls.indexOf(ball),1)
     bullets.splice(bullets.indexOf(bullet),1)
     score= score+1
     sheep_sound.play()
   }
 }
 }

 for(let bullet of bullets){//只要是陣列的方式都可以用此方式
  bullet.draw()
  bullet.update()
 }
 textSize(50)
  text(score,50,50)//在座標為(50，50)上，顯示score分數內容 
  push()
  let dx =mouseX-width/2
  let dy =mouseY -height/2
let angle=atan2(dy,dx)//算出角度
let w=100
let h=50
//angle+=0.01;
 translate(width/2,height/2)
 fill("#cdb4db")
 noStroke()
 rotate(angle);
rect(0,0,w,h)//正方形形砲台
 fill("#480ca8")
rect(20,5,8,8)
 fill("#480ca8")
 rect(20,-8,8,8)
 fill("#ffbe0b")
 triangle(-5,5,5,5,0,-5)
 fill("#ff006e")
 noStroke()
rect(50,20,50,20)
 fill("#ff006e")
 noStroke()
 rect(50,-20,50,20)
 pop()
}

function  mousePressed (){

///按下消失不見


  //產生一個羊
  //ball = new Obj ({
    //p:{x:mouseX,y:mouseY}
  //})///在滑鼠按下的地方產生一個因物件產生一個新的Obj class元件
  //balls.push(ball)//把ball的物件放入到balls陣列內(丟到倉庫)

  /////
 // for(let ball of balls){ //檢查每一個物件
    //if(ball.isBallInRanger(mouseX,mouseY)){           
     //balls.splice(balls.indexOf(ball),1)///從倉庫balls取出被按滑鼠的物件編號(balls.indexOf(ball),1)
     //score= score+1
  //  }
 // }


 //按一下產生一個飛彈
 bullet = new Bullet ({
  r:30
 })//在滑鼠按下的地方，產生一個新的bullet class元件(產產生一個飛彈)
 bullets.push(bullet)///把bullets的物件放入到bullet陣列內(丟到倉庫)
 bullet_sound.play()
}