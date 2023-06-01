///class:類別，粒子
class Obj {//宣告一個類別，針對我畫一隻羊
    constructor(args){///預設值，物件基本資料 例如:顏色、移動的速度、大小、初始位置......
  //  this.p = args.p ||  {x: random(width), y: random(height)   }//描述為該物件的初始位置，
  //|| or，當產生一個物件時，有傳給位置參數，則使用該參數 ，如果沒有船參數，就已or後面設定產出
      this.p = args.p || createVector(random(width),random(height) )//把原本變成向量方式呈現
  //this.v = {x: random(-1,1), y: random(-1,1)}//移動速度
      this.v =createVector(random(-1,1),random(-1,1))//把原本變成向量方式呈現
      this.size = random(8,8)//一個物件的放大倍率
      this.color = random(fill_colors)//充滿顏色
      this.stroke = random(line_colors)//外框顏色線條
     }
     draw(){///畫出單一個物件形狀
      push()///執行push()後，依照我的設定，設定原點(0,0)位置
      translate(this.p.x,this.p.y)///以該物件為原點
      scale(this.v.x<0?1:-1,-1)//如果this.v.x<0條件成立，值為1，否則為-1
      fill(this.color)
      stroke(this.stroke)
      strokeWeight(4)//線條粗細
      beginShape()
    

      for(var k=0; k< points.length-1;k=k+1){
        //line(points[k][0]*this.size,points[k][1]*this.size,points[k+1][0]*this.size,points[k+1][1]*this.size)
       curveVertex(points[k][0]*this.size,points[k][1]*this.size)//畫線為圓弧方式
      }
      endShape()//移動的程式碼內容
      pop()///執行 pop()之後，原點(0,0)回到整個視窗的左上角

     }
     update(){
      //this.p.x = this.p.x + this.v.x///x軸目前位置this.p.x ，加上x軸的移動速度this.v.x
      //this.p.y = this.p.y + this.v.y///x軸目前位置this.p.y ，加上x軸的移動速度this.v.y
      this.p.add(this.v)//與上兩行同效果
    ////向量sub=減號

     //知道滑鼠的位置並建立一個滑鼠的向量
     let mouseV = createVector(mouseX,mouseY)///把滑鼠的位置傳換成一個向量直
     let delta = mouseV.sub(this.p).limit(this.v.mag())///計算出滑鼠所在位置mousev到物件向量this.p,每次移動3,(this.v.mag()速度大小
     this.p.add(delta)
     
     
     if(this.p.x<=0 ||this.p.x>=width ){//x軸碰到左邊(<0),x軸碰到右邊(width)
       this.v.x = -this.v.x//把速度方向改變
     }
      if(this.p.y<=0 || this.p.y>=height ){//y軸碰到上邊(<0),x軸碰到下邊(width)
        this.v.y= -this.v.y
      }
 }
 isBallInRanger(x,y){////功能:判斷滑鼠按下位置是否在物件的範圍內
  let d = dist(x,y,this.p.x,this.p.y) //計算兩點(滑鼠按下及物件中心點)之間的距離，放到d變數內
  if(d<4*this.size){
    return true//滑鼠與物件的距離小於物件的寬度，代表碰觸，則傳回ture的值
  }else{
    return false//滑鼠與物件的距離大於物件的寬度，代表沒有碰觸，則傳回false的值

  }
 }
}