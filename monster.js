
//var monster_colors = "e27396-ea9ab2-efcfe3-eaf2d7-b3dee2".split("-").map(a=>"#"+a)

//class Monster{//宣告一個怪物類別 ,名稱為monster   
 //   constructor(args){//預設值，基本資料 例如:顏色、移動的速度、大小、初始位置......
        this.r = args.r || 100 //怪物的主體,設計的怪物有大有小時，就傳參數，args.r來設定怪物大小，沒傳參數就已10為主
        this.p = args.p || createVector(random(width),random(height))//建立向量,亂數抽取
        this.v = args.p || createVector(random(-1,1),random(-1,1))//移動的速度若未傳達參數九以亂數為主
        this.color = args.color || random(fill_colors)
  //  }
  //  draw(){//劃出元件
   //push()//重新設定
  // translate(this.p.x,this.p.y)//將原點座標移到物件中心
   //fill(this.color)
  // noStroke()
  // rect(0,0,this.r)

   //pop()//恢復原點整個視窗左上角
   // }

   // update(){//計算出元件移動後的位置
   // this.p.add(this.v)
  //  }
//}