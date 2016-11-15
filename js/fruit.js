var fruitObj=function(){
	this.alive=[];//布尔值boolean
	this.x=[];//图片的宽度
	this.y=[];//图片的高度
	this.aneNum=[];
	this.l=[];//图片的长度
	this.speed=[];//每个果实的速度
	this.fruitType=[];//果实的颜色
	this.yellow=new Image();
	this.blue=new Image();
}
fruitObj.prototype.num=20;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.aneNum[i]=0;
		this.speed[i]=Math.random()*0.02+0.003;
		this.fruitType[i]="";
		// this.l[i]=0;
		// this.born(i);
	}
	this.yellow.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
}
//画果实
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		//绘制graw
		//find a ane,grow,fly up

		if(this.alive[i]){
			if(this.fruitType[i]=="blue"){
				var pic=this.blue;
			}else{
				var pic=this.yellow;
			}
			if(this.l[i]<=16){//果实的大小
				var NO=this.aneNum[i];
				this.x[i]=ane.headx[NO];
				this.y[i]=ane.heady[NO];
				this.l[i]+=this.speed[i]*deltaTime;
				ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			}else{
				this.y[i]-=this.speed[i]*5*deltaTime;
				ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			}
			//保证游戏里的动作流畅连贯
			if(this.y[i]<10){
				this.alive[i]=false;
			}
		}
		
	}
}
fruitObj.prototype.born=function(i){
	
	// this.x[i]=ane.headx[aneID];
	// this.y[i]=ane.heady[aneID];
	this.aneNum[i]=Math.floor(Math.random()*ane.num);//海葵ID
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2){
		this.fruitType[i]= "blue"//yellow blue
	}else{
		this.fruitType[i]="yellow";
	}
}
fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}
function fruitMonitor(){
	var num=0;
	for(var i=0;i>fruit.num;i++){
		if(fruit.alive[i]) num++;
	}
	if(num<15){
		//send fruit
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}
