let imagenes = [];
let estado = 0;
let textos = ["AXOLOTL",
"Visité el jardín zoológico casi todas las tardes. Me gustaba mirar los axolotls en su estanque. Eran criaturas misteriosas, con ojos que parecían sonreír. Su mirada me hipnotizaba. Me sentía atraído por su mundo submarino. Quería entenderlos.",
"Me senté frente al estanque y los observé. Sus movimientos eran lentos y gráciles. Parecían bailar en el agua. Sus ojos me miraban con curiosidad. Me sentí conectado a ellos. Quería saber más.",
"Comencé a sentir una conexión emocional con los axolotls. Me imaginaba a mí mismo en su lugar. Sentía su tranquilidad y paz. Quería ser uno de ellos. Su mundo era más atractivo que el mío."
];
let botonX = 430;
let botonY = 420;
let botonAncho = 200;
let botonAlto = 50;
let botonTexto = "Siguiente";
let bax = 50;
let bat = "Atrás";
let num = 0;

function preload(){
  for (let i=0; i<5; i++) {
    imagenes[i] = loadImage("data/fondo"+i+".jpeg")
  }
}
function setup() {
  createCanvas(640, 480);
  estado = 0;
}

function draw() {
  background(200)
  
  
  if (estado === 0) {
    cargarImagensig(imagenes[0],0,0,640, 480, textos[0]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
  } else if (estado === 1) {
    cargarImagensig(imagenes[1],0,0,640, 480, textos[1]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 2) {
    cargarImagensig(imagenes[2],0,0,640, 480, textos[2]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 3) {
    cargarImagensig(imagenes[3],0,0,640, 480, textos[3]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 4) {
    cargarImagensig(imagenes[4],0,0,640, 480, textos[4]);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }
}

function mousePressed() {
  if (estado === 0) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 1;
    }
  } else if (estado === 1) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 2;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 0;
    }
  } else if (estado === 2) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 3;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 1;
    }
  } else if (estado === 3) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 4;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 2;
      }  else if (estado === 4) {
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 3;
    }
    }
  }
}


function dibujarBoton(x, y, an, al, texto) {
  if (detectarBoton(x, y, an, al)) {
    fill(0, 180, 180);
    stroke(255, 105, 150);
    strokeWeight(4);
  } else {
    fill(255, 105, 150);
    stroke(0, 180, 180);
    strokeWeight(4);
  }
  rect(x, y, an, al, 8, 8, 8, 8);
  fill(255);
  noStroke();
  textSize(25);
  textAlign(CENTER, CENTER);
  text(texto, x + an/2, y + al/2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}

function cargarImagensig(imag, x, y, ancho, alto, texto) {
   image(imag, x, y, ancho, alto);
  fill(0);
  textSize(23);
  textAlign(CENTER, CENTER);
  text(texto, 300, 200);
}
