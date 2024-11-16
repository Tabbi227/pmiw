class info {
  constructor() {
    this.activa = false;
    this.botonX = (width - 200) / 2;
    this.botonY = height - 100;
    this.botonAncho = 200;
    this.botonAlto = 50;
  }

mostrar() {
    image(imFondo, 0, 0, width, height);
    textSize(40);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Creado por:", width / 2, height / 3);
    textSize(30);
    text("Agustín Tabbita", width / 2, height / 3 + 50);
    text ("Candela Di Lorenzo", width / 2, height / 3 + 80);

    fill(213, 125, 170);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto);
    fill(255);
    text("Volver", this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }

  detectarClick() {
    if (mouseX > this.botonX && mouseX < this.botonX + this.botonAncho && mouseY > this.botonY && mouseY < this.botonY + this.botonAlto) {
      this.activa = false;
      pantallaCreditos.activa = true;
    }
  }
}
