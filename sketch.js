let nbarray=[];

//初始內容
function setup() {
  createCanvas(720, 460, WEBGL); //(畫布大小，決定使用3D方式進行渲染)
  for(let i=0;i<10;i=i+1) {
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(25,-height/2+(height/5)*i,0,50)); //方塊大小
  }
}
function draw() {
  background(200); //背景顏色
  nbarray.forEach((v)=>{ //將袋子中所有東西 稱為 V執行他的相關函式
    v.display();
  })
  //移動物件For Loop(大量複製)
  //for(let i=0;i<value;i=i+1) {函式}
  //for(開始的定義; 怎樣才會停止每次重作時候改變什麼) {函式}
  //巢狀結構
  
}

//自訂一個類別的物件
class myBox{
  //怎樣建構這個物件
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx =1;
  }
  //定義一些能力 當呼叫時 執行
  //能力1:顯現這個box
  display(){
    push();
      translate(this.x,this.y,this.z,);
        if (mouseX-width/2 > this.x-this.size/2 &&
            mouseX-width/2 < this.x+this.size/2 &&
            mouseY-height/2 > this.y-this.size/2 &&
            mouseY-height/2 < this.y+this.size/2 
           ){
            rotateX(frameCount*0.01);
            rotateY(frameCount*0.01);
            this.mx=this.mx+0.5; //每碰到一次就加速0.5
        }
      box(this.size);
    pop();
    this.move();
  }
  //能力2 移動
   move(){
    if (this.x>width/2){this.mx = -1*this.mx;}
    if (this.x<-width/2){this.mx = -1*this.mx;}  
    this.x = this.x + this.mx;
  }
}
