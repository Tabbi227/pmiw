let jogo;
let imFondo;
let imAxo;

function preload(){
  imFondo = loadImage("data/fondo.png");
  imAxo= loadImage("data/axo.png");
}

function setup() {
 createCanvas(640,480);
 jogo = new juego(4);
}

function draw() {
  //background(255);
  image(imFondo, 0, 0, width, height);
  jogo.dibujar();
}

function keyPressed() {
  jogo.teclaPress(keyCode)
}
function keyReleased(){
  jogo.teclaSolt(keyCode)
}
function mousePressed() {
  if (jogo.vidas.boton && mouseX > jogo.vidas.boton.x && mouseX < jogo.vidas.boton.x + jogo.vidas.boton.width && mouseY > jogo.vidas.boton.y && mouseY < jogo.vidas.boton.y + jogo.vidas.boton.height) {
   jogo.vidas.reiniciarJuego();
  }
}
