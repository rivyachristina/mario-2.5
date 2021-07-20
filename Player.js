class Player
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="blue";

	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}
	moveRight(){
		this.spt.x=this.spt.x+12;
	}
    moveLeft(){
		this.spt.x=this.spt.x-12;
	}
   jump(){
	    this.spt.velocityY=-20 
   }
   
}
























