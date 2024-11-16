class winlost{
  constructor(vidasIniciales, comida, axolotl){
  this.vidas = vidasIniciales;
  this.comida = comida;
  this.axolotl = axolotl
  this.contador = 0;
  this.botonX = width / 2 - 100; 
  this.botonY = height / 2 + 50;
  this.botonAncho = 200;  
  this.botonAlto = 50; 
  }
  
  comidaCaida(){
    for(let i= 0;i<this.comida.length;i++){
      if(this.comida[i].posY> height + this.comida[i].com / 2){
        this.comida[i].reset();
        this.vidas--;
        if(this.vidas<=0){
          this.pierde();
        }
      }
    }
  }
  comidaOb(){
    if(this.contador>= 15){
      this.gana();
    }
  }
  
  gana(){
    textSize(40);
    textAlign(CENTER,CENTER);
    text("GANASTE", width/2,height/2);
    this.mostrarBoton();
    noLoop();
  } 
  pierde(){
    textSize(40);
    textAlign(CENTER,CENTER);
    text("PERDISTE", width/2,height/2);
    this.mostrarBoton();
    noLoop();
  }
  
  sumarPuntos(){
    this.contador++;
  }
 
  mostrarBoton(){
    fill(213, 125, 170);
    rectMode(CORNER)
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto);
    fill(255); 
    textSize(18);
    textAlign(CENTER, CENTER);
    text('Volver a Jugar', this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }

  reiniciarJuego(){ 
     this.vidas = 5;
    this.contador = 0;
    for (let i = 0; i < this.comida.length; i++) {
      this.comida[i].reset();
    }
    loop();
  }
    
}
