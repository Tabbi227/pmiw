let imagenes = [];
let estado;
let textos = ["AXOLOTL","Visité el jardín zoológico casi todas las tardes. Me gustaba mirar los axolotls en su estanque. Eran criaturas misteriosas, con ojos que parecían sonreír. Su mirada me hipnotizaba. Me sentía atraído por su mundo submarino. Quería entenderlos.","Me senté frente al estanque y los observé. Sus movimientos eran lentos y gráciles. Parecían bailar en el agua. Sus ojos me miraban con curiosidad. Me sentí conectado a ellos. Quería saber más.","Comencé a sentir una conexión emocional con los axolotls. Me imaginaba a mí mismo en su lugar. Sentía su tranquilidad y paz. Quería ser uno de ellos. Su mundo era más atractivo que el mío."];
let botonX = 430;
let botonY = 420;
let botonAncho = 200;
let botonAlto = 50;
let botonTexto = "Siguiente";



function preload(){
  for (let i=0; i<4; i++) {
    imagenes[i] = loadImage("data/fondo"+i+".jpeg")
  }
}

function setup() {
  createCanvas(640, 480)
  estado = 0;
}

function draw() {
  background(200)
  if (estado === 0){
    cargarImagensig (imagenes[0],0,0,640, 480, textos[0])
  }else if (estado === 1){
    cargarImagensig (imagenes[1],0,0,640, 480, textos[1])
  }else if (estado === 2){
    cargarImagensig (imagenes[2],0,0,640, 480, textos[2])
  }else if (estado === 3){
    cargarImagensig (imagenes[3],0,0,640, 480, textos[3])
  }
  dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
}


function mousePressed() {
   if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
      estado++;
   }
}

function dibujarBoton(x, y, ancho, alto, texto) {
  fill(255, 0, 0);
  rect(x, y, ancho, alto);
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

function cargarImagensig(imag, x, y, ancho, alto, texto) {
  image(imag, x, y, ancho, alto);
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(texto, 300, 200)
}
