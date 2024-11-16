/*
 *Candela Di Lorenzo 120296/0
 *Agustin Tabbita 119151/7
 *Tp1Final-Parte2
 *Comision 1
 *Video Explicacion:
    https://youtu.be/32h5edIZ7kQ?si=mzXJF3KARz5BNm7k
    
*/
 
let jogo;
let imFondo;
let imAxo;
let pantallaCreditos;
let pantallaInfo;
let pantallaJuego = false;

function preload(){
  imFondo = loadImage("data/fondo.png");
  imAxo= loadImage("data/axo.png");
}

function setup() {
 createCanvas(640,480);
 pantallaCreditos = new creditos();
 pantallaInfo = new info();
 jogo = new juego(4);
}

function draw() {
  if (pantallaCreditos.activa) {
      pantallaCreditos.mostrar();
  } else if (pantallaInfo.activa) {
      pantallaInfo.mostrar();
  } else if (pantallaJuego){
      image(imFondo, 0, 0, width, height);
      jogo.dibujar();
  }
}

function keyPressed() {
  jogo.teclaPress(keyCode)
}
function keyReleased(){
  jogo.teclaSolt(keyCode)
}
function mousePressed() {
  if (pantallaCreditos.activa) {
    pantallaCreditos.detectarClick();
   }else if (pantallaInfo.activa) {
    pantallaInfo.detectarClick();
   }else if (mouseX > jogo.vidas.botonX && mouseX < jogo.vidas.botonX + jogo.vidas.botonAncho && mouseY > jogo.vidas.botonY && mouseY < jogo.vidas.botonY + jogo.vidas.botonAlto) {
      jogo.vidas.reiniciarJuego();
   }
}
