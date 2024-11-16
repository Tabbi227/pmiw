let jogo;

function preload(){

}

function setup() {
 createCanvas(640,480);
 jogo = new juego(4);
}

function draw() {
  background(255);
  jogo.dibujar();
}

function keyPressed() {
  jogo.teclaPress(keyCode)
}
function keyReleased(){
  jogo.teclaSolt(keyCode)
}
