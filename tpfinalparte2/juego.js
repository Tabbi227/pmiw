class juego {
  constructor(cantComida){
    this.cantComida= cantComida;
    this.crearAxolotl();
    this.crearComida();
    this.vidas = new winlost(5, this.comida, this.axolotl);
  }
  
  mostrarCreditos() {
    this.creditos.mostrarPantalla();
  }

  iniciarJuego() {
    this.crearAxolotl();
    this.crearComida();
    this.vidas = new winlost(5, this.comida, this.axolotl);
  }
  
    crearComida(){
    this.comida = [];
     for(let i=0;i<this.cantComida;i++){
      this.comida[i]= new comida(random(width), i*0,10);
    }
  }
  
   crearAxolotl(){
    this.axolotl = new axolotl(width/2, 400,50,30);
  }
  
  dibujar(){
    this.axolotl.dibujar();
    this.axolotl.mover();
    for(let i=0;i<this.cantComida;i++){
      this.comida[i].dibujar();
      this.comida[i].mov();
    }
    text("puntos: "+this.vidas.contador, 50, 50);
    text("vidas: " + this.vidas.vidas, 50, 70);
    textSize(17);
    this.chocar();
    this.vidas.comidaOb();
    this.vidas.comidaCaida();
  }
  
  chocar(){
    for(let i=0; i<this.comida.length; i++){
      let comida =this.comida[i];
      if (comida.posX > this.axolotl.posX - this.axolotl.ancho / 2 && comida.posX < this.axolotl.posX + this.axolotl.ancho / 2 && comida.posY > this.axolotl.posY - this.axolotl.alto / 2 && comida.posY < this.axolotl.posY){
        this.comida[i].reset();
        this.vidas.sumarPuntos();
      }
    }
  }
  
  teclaPress(keyCode){
    this.axolotl.teclaPress(keyCode);
  }
  teclaSolt(keyCode) {
    this.axolotl.teclaSolt(keyCode);
    }
}
