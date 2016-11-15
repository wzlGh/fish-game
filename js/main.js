var can1,cta1;
var can2,ctx2;

var canwidth;
var canheight;


var lastTime,deltaTime;//定义上一帧被执行的时间，两帧之间的时间差

var bgPic=new Image();

var ane;//海葵
var fruit;//果实

var mom;//鱼妈妈
var baby;//鱼孩子

var mx,my;//鼠标的位置

var wave;//白圈
var halo;

var dust;//漂浮物
var dustPic=[];

var babyTail=[];//小鱼尾巴图片
var babyEye=[];//小鱼眼睛图片
var babyBody=[];//小鱼身体

var momTail=[];
var momEye=[];
var momBodyO=[];
var momBodyB=[];

var data;

document.body.onload=game;
function game(){
	init(); 
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init(){
	//获得canvas元素
	can1=document.getElementById("canvas1");//fishes,dust UI，圆circle
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");//背景，海葵,果实
	ctx2=can2.getContext("2d");

	can1.addEventListener('mousemove',onMouse,false);

	bgPic.src="./src/background.jpg";

	canwidth=can1.width;
	canheight=can1.height;

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	baby=new babyObj();
	baby.init();

	mx=canwidth*0.5;
	my=canheight*0.5;

	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="./src/babyTail"+ i +".png";
	}
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./src/babyEye"+ i +".png";
	}

	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
	}
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="./src/bigTail"+i+".png";

	}
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="./src/bigEye"+i+".png";
	}

	data=new dataObj();

	for(var i=0;i<8;i++){
		momBodyO[i]=new Image();
		momBodyB[i]=new Image();
		momBodyO[i].src="./src/bigSwim"+i+".png";
		momBodyB[i].src="./src/bigSwimBlue"+i+".png";
	}

	ctx1.font="30px Verdena";
	ctx1.textAlign="center";

	wave=new waveObj();
	wave.init();

	halo=new haloObj();
	halo.init();

	for(var i=0;i<7;i++){
		dustPic[i]=new Image();
		dustPic[i].src="./src/dust"+i+".png"
	}

	dust=new dustObj();
	dust.init();
}
function gameloop(){
	window.requestAnimFrame(gameloop);//requestAnimFrame比setInterval,setTimeout更科学，但是有一个动态的时间间隔
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	//优化两帧之间的时差
	if(deltaTime>40) deltaTime=40;


	drawBackground();
	ane.draw();//每一帧都绘制海葵
	fruitMonitor();
	fruit.draw();//绘制果实
	ctx1.clearRect(0,0,canwidth,canheight)
	mom.draw();//绘制大鱼
	baby.draw();//绘制小鱼
	momFruitCollision();//大鱼吃果实
	momBabyCollision();//大鱼碰小鱼

	data.draw();//绘制分数

	wave.draw();//绘制白圈

	halo.draw();

	dust.draw();//绘制漂浮物
	
}
function onMouse(e){
	if(!data.gameOver){
		if(e.offSetX||e.layerX){
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
			
		}
	}
	
}