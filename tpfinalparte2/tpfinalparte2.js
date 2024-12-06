/*

 *Candela Di Lorenzo 120296/0
 *Agustin Tabbita 119151/7
 
 *Tp1Final-Parte2
 *Comision 1
 
 *Video Explicacion:
    https://youtu.be/Od0FCv6bVtk
    
*/
 
let jogo;
let imFondo;
let imAxo;
let sonido;
let pantallaCreditos;
let pantallaInfo;

function preload(){
  imFondo = loadImage("data/fondo.png");
  imAxo= loadImage("data/axo.png");
  sonido = loadSound("data/tic.mp3");
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
  } else if (jogo.activa){
      image(imFondo, 0, 0, width, height);
      jogo.dibujar();
  }
}

function keyPressed() {
  jogo.teclaPress(keyCode)
  if (!sonido.isPlaying()) {
        sonido.play();
    }
}
function keyReleased(){
  jogo.teclaSolt(keyCode)
}
function mousePressed() {
  if (pantallaCreditos.activa) {
    pantallaCreditos.detectarClick();
   }else if (pantallaInfo.activa) {
    pantallaInfo.detectarClickVolver();
   }else if (mouseX > jogo.vidas.botonX && mouseX < jogo.vidas.botonX + jogo.vidas.botonAncho && mouseY > jogo.vidas.botonY && mouseY < jogo.vidas.botonY + jogo.vidas.botonAlto) {
      jogo.vidas.reiniciarJuego();
   }
}
