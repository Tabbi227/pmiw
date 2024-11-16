class winlost{
  constructor(vidasIniciales, comida, axolotl){
  this.vidas = vidasIniciales;
  this.comida = comida;
  this.axolotl = axolotl
  this.contador = 0;
  this.boton= null;
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
/// 
  mostrarBoton(){
    this.boton = createButton('Volver a Jugar');
    this.boton.position(width / 2 - 50, height / 2 + 50); 
  }
///
  reiniciarJuego(){
    this.vidas = 5;
    this.contador = 0;
    for (let i = 0; i < this.comida.length; i++){
      this.comida[i].reset();
    }
    this.boton.remove();
    loop();
  }
    
}
