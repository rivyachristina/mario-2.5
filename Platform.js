// Creating platform class, objects will be created according to posX.



class Platform {
    constructor(posX) {
      this.rw = random(100, 500);// width of platform will be between 100 and 500
      this.rh = random([260,190,190,190,260,260,260,260,260,260,190,190]); // height of platform will be taken from array given to random function
      this.rx = posX; //setting the x posing where platform will be created  
      this.ry = height;   //setting y position where platform will be created to height( is a variable that stores height of canvas)
      this.spt=createSprite(this.rx, this.ry , this.rw, this.rh); //using rx,ry,rw,rh to give values 
      this.spt.shapeColor="green";
    
    }
  
  
  }
  
  