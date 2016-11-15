var babyObj=function(){
	this.x;
	this.y;
	this.angle;
	// this.babyEye=new Image();
	// this.babyBody=new Image();
	// this.babyTail=new Image();

	this.babyTailTimer=0;
	this.babyTailCount=0;

	this.babyEyeTimer=0;
	this.babyEyeCount=0;
	this.babyEyeInterval=100;

	this.babyBodyTimer=0;
	this.babyBodyCount=0;
}
babyObj.prototype.init=function(){
	this.x=canwidth*0.5-100;
	this.y=canheight*0.5+150;
	this.angle=0;
	// this.babyEye.src="./src/babyEye0.png";
	// this.babyBody.src="./src/babyFade0.png";
}
babyObj.prototype.draw=function(){

	this.x=lerpDistance(mom.x,this.x,0.98);
	this.y=lerpDistance(mom.y,this.y,0.98);

	var detaX=mom.x-this.x;
	var detaY=mom.y-this.y;
	var beta=Math.atan2(detaY,detaX)+Math.PI;

	this.angle=lerpAngle(beta,this.angle,0.6);
	//babyTail计数工作
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer>40){
		this.babyTailCount=(this.babyTailTimer+1)%8;
		this.babyTailTimer%=40;
	}

	//babyEye计数工作
	this.babyEyeTimer+=deltaTime;
	if(this.babyEyeTimer>this.babyEyeInterval){
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		this.babyEyeTimer%=this.babyEyeInterval;

		if(this.babyEyeCount==0){
			this.babyEyeInterval=Math.random()*1500+2000;
		}else{
			this.babyEyeInterval=200;
		}
	}

	//babyBody
	this.babyBodyTimer+=deltaTime;
	if(this.babyBodyTimer>300){
		this.babyBodyCount=this.babyBodyCount+1;
		this.babyBodyTimer%=300;
		if(this.babyBodyCount>19){
			this.babyBodyCount=19;
			//y游戏结束game over
			data.gameOver=true;
		}
	}

	ctx1.save();

	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);

	var babyTailCount=this.babyTailCount;
	ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5+25,-babyTail[babyTailCount].height*0.5);
	
	var babyBodyCount=this.babyBodyCount;
	ctx1.drawImage(babyBody[babyBodyCount
		],-babyBody[babyBodyCount
		].width*0.5,-babyBody[babyBodyCount
		].height*0.5);
	var babyEyeCount=this.babyEyeCount;
	// console.log(babyEyeCount);
	ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width
		*0.5,-babyEye[babyEyeCount].height*0.5);


	// console.log(this.x);
	ctx1.restore();
}	