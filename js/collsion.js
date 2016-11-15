//判断大雨和果实的距离，如果小于某一个距离，大鱼吃掉果实，如果大于某一个值，大于继续运动
function momFruitCollision(){
	if(!data.gameOver){//游戏没有结束时才能吃果实
		for(var i=0;i<fruit.num;i++){
			if(fruit.alive[i]){
				var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if(l<900){
					//果实被吃掉
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					if(mom.momBodyCount>7){
						mom.momBodyCount=7;
					}
					if(fruit.fruitType[i]=="blue"){//如果是蓝色果实则加倍
						data.double=2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
			
	}
}
//大鱼和小鱼的碰撞
function momBabyCollision(){
	if(data.fruitNum>0 && !data.gameOver){//吃到果实并且游戏没有结束才可以救小鱼
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
		if(l<900){
			//baby recover(复原)
			baby.babyBodyCount=0;
			//数据归零
			// data.reset();
			mom.momBodyCount=0;
			data.addScore();
			halo.born(baby.x,baby.y);
		}
	}
	
}