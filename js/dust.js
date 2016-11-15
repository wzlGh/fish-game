var dustObj=function(){
	this.x=[];
	this.y=[];
	this.amp=[];
	this.No=[];

	this.alpha;
}
dustObj.prototype.num=30;
dustObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.x[i]=Math.random()*canwidth;
		this.y[i]=Math.random()*canheight;
		this.amp[i]=40+Math.random()*25;
		this.No[i]=Math.floor(Math.random()*7);
	}
	this.alpha=0;
}
dustObj.prototype.draw=function(){
	this.alpha += deltaTime*0.00001;
	var l=Math.sin(this.alpha);
	for(var i=0;i<this.num;i++){
		var no=this.No[i];
		ctx1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i]);
	}
}