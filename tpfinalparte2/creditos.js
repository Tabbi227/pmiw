class creditos{
   constructor() {
    this.activa = true;
    this.botonX = (width - 200) / 2;
    this.botonY = height / 2 + 100;
    this.botonAncho = 200;
    this.botonAlto = 50;
    this.botonDOSY = 400;
  }

  mostrar() {
    image(imFondo, 0, 0, width, height);
    textSize(50);
    fill(0);
    textAlign(CENTER, CENTER);
    text("AXOLOTL GAME", width / 2, height / 3);
    
    textSize(24);
    fill(213, 125, 170);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto);
    fill(255);
    text("Comenzar", this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
    
    fill(213, 125, 170);
    rect(this.botonX, this.botonDOSY, this.botonAncho, this.botonAlto);
    fill(255);
    text("Creditos", this.botonX + this.botonAncho / 2, this.botonDOSY + this.botonAlto / 2);
  }

  detectarClick() {
    if (mouseX > this.botonX && mouseX < this.botonX + this.botonAncho && mouseY > this.botonY && mouseY < this.botonY + this.botonAlto) {
      this.activa = false;
      pantallaJuego = true;
    }
    if ( mouseX > this.botonX && mouseX < this.botonX + this.botonAncho && mouseY > this.botonDOSY && mouseY < this.botonDOSY + this.botonAlto) { 
      this.activa = false;
      pantallaInfo.activa = true; 
    }
  }
}
