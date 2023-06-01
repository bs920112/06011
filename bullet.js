//定義一個bullet物件的class
class Bullet{
    constructor(args){//預設值，基本資料 例如:顏色、移動的速度、大小、初始位置......
    this.r = args.r || 10 //發射飛彈的圓圈,設計的飛彈有大有小時，就傳參數，args.r來設定飛彈大小，沒傳參數就已10為主
    this.p = args.p || createVector(width/2,height/2)//建立向量
    this.v = args.p || createVector(mouseX-width/2,mouseY-height/2).limit(5)
    this.color = args.color || "#0ead69"
}
  draw(){//匯出物件程式碼
    push()
    translate(this.p.x,this.p.y)
    fill(this.color)
    noStroke()
    ellipse(0,0,this.r)
    pop()
  
  }
  update(){//計算出移動後的位置
   //this.p.x = this.p.x + this.v.x///x軸目前位置this.p.x ，加上x軸的移動速度this.v.x
   //this.p.y = this.p.y + this.v.y///x軸目前位置this.p.y ，加上x軸的移動速度this.v.y
   this.p.add(this.v)

  }
  }