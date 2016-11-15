var dataObj=function(){
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
}
/*dataObj.prototype.reset=function(){
	this.fruitNum=0;
	this.double=1;
}*/
dataObj.prototype.draw=function(){
	var w=can1.width;
	var h=can1.height;

	ctx1.save();
	ctx1.shadowBlur=5;
	ctx1.shadowColor="white";
	ctx1.fillStyle="white";
	// ctx1.fillText("num " + this.fruitNum,w*0.5,h-60);
	// ctx1.fillText("double "+this.double,w*0.5,h-30);
	ctx1.fillText("SCORE: "+this.score,w*0.5,h-30);


	if(this.gameOver){
		this.alpha+=deltaTime*0.0003;
		if(this.alpha>1)this.alpha=1;
		ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")"
		ctx1.fillText("GAME OVER",w*0.5,h*0.5);
	}
	ctx1.restore();
}
dataObj.prototype.addScore=function(){
	this.score+=this.fruitNum*10*this.double;
	this.fruitNum=0;
	this.double=1;
}