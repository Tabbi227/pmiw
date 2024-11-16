class comida{
  constructor(posX, posY, com){
    this.posX = posX;
    this.posY = posY;
    this.com=com;
    this.vel= random(0.7,1.2);
  
  }
  mov(){
    if (this.posY>height+this.com){
      this.reset();
    }
    this.posY += this.vel;
  }
  
  reset(){
    this.posY = -this.com;
    this.posX = random(width);
  }
  
  dibujar(){
      fill(0)
      ellipse(this.posX, this.posY, this.com)

  }
  
  
}
