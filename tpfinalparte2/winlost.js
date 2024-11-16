class winlost{
  constructor(vidasIniciales, comida, axolotl){
  this.vidas = vidasIniciales;
  this.comida = comida;
  this.axolotl = axolotl
  this.contador = 0;
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
    noLoop();
  } 
  pierde(){
    textSize(40);
    textAlign(CENTER,CENTER);
    text("PERDISTE", width/2,height/2);
    noLoop();
  }
  
  sumarPuntos(){
    this.contador++;
  }
    
    
}
