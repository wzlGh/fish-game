var aneObj=function(){
	//开始点 结束点（sin） 控制点
	this.rootx=[];
	this.headx=[];
	this.heady=[];
	this.alpha=0;
	this.amp=[];//振幅
	// this.len=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){//初始化
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16+Math.random()*20//Math.random()包括0不包括1
		this.headx[i]=this.rootx[i];
		this.heady[i]=canheight-240+Math.random()*50;
		this.amp[i]=Math.random()*50+30;
		// this.len[i]=200+Math.random()*50;
	}
}

//绘制海葵
aneObj.prototype.draw=function(){
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	ctx2.strokeStyle="#3b154e";
	for(var i=0;i<this.num;i++){
		//开始位置beginPath，起始点moveTo，lineTo路径从此起始点到另一点，绘制stroke，strokeStyle，linewidth,lineCap,全局透明度
		/*ctx2.beginPath();
		ctx2.moveTo(this.x[i],canheight);
		ctx2.lineTo(this.x[i],canheight-this.len[i]);
		ctx2.stroke();*/

		this.alpha+=deltaTime*0.00001;
		var l=Math.sin(this.alpha);
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canheight);//起始点
		this.headx[i]=this.rootx[i]+l*this.amp[i]
		ctx2.quadraticCurveTo(this.rootx[i],canheight-100,this.headx[i],this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();//只在save（）和restore（）之间起作用
}	