class axolotl{
  constructor(posX,posY,alto,ancho){
    this.posX = posX;
    this.posY = posY;
    this.alto = alto;
    this.ancho = ancho;
    this.velX = 0;
    this.vida = 5;
  }

  dibujar(){
    fill(200)
    rectMode(CENTER);
    rect(this.posX, this.posY, this.ancho,this.alto)
  }
  
  teclaPress(keyCode){
    if(keyCode== LEFT_ARROW){
      this.velX =- 4;
    }else if (keyCode== RIGHT_ARROW){
      this.velX =+ 4;
    }
  }
  
  teclaSolt(keyCode) {
    if (keyCode === LEFT_ARROW){
      this.velX = 0;
    }else if (keyCode === RIGHT_ARROW){
      this.velX = 0;
    }
  }
    
  mover(){
    this.posX += this.velX;
    this.posX = constrain(this.posX, this.ancho / 2, width - this.ancho / 2);
  }
  
  estaVivo(){
  
  }
  
}
