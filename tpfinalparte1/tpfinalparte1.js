/*

 *Candela Di Lorenzo 120296/0
 *Agustin Tabbita 119151/7
 *Tp1Final-Parte1
 *Comision 1
 *Video Explicacion:
   https://www.youtube.com/watch?v=XhCWwwEq4bI
 
*/
let sonido;
let imagenes = [];
let imagenTexto0;
let estado = 0;
let textos = [];
let botonX = 430;
let botonY = 420;
let botonAncho = 200;
let botonAlto = 50;
let botonTexto = "Siguiente";
let bax = 20;
let bat = "Atrás";
let bbx = 225;
let bbAncho = 150;
let num = 0;
let textoX = 120;
let textoY = 150;
let textoAncho = 400;
let textoAlto = 400;
let miFuente;

function preload() {
  for (let i=0; i<21; i++) {
    imagenes[i] = loadImage("data/fondo"+i+".jpg");
  }
  //imagenTexto0 = loadImage("data/texto0.png");
  textos = loadStrings("data/axolotl.txt");
  
  sonido = loadSound("data/cancion.mp3");
}
function setup() {
  createCanvas(640, 480);
  estado = 0;
}

function draw() {
  background(200)

    if (estado === 0) {
    //cargarImagenEstado0(imagenes[0], imagenTexto0);
    cargarImagensig(imagenes[0],0,0,640, 480);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, "Iniciar");
    dibujarBoton(botonX, 350, botonAncho, botonAlto, "Créditos");
  } else if (estado === 1) {
    cargarImagensig(imagenes[1], 0, 0, 640, 480, textos[1]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 2) {
    cargarImagensig(imagenes[2], 0, 0, 640, 480, textos[2]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 3) {
    cargarImagensig(imagenes[3], 0, 0, 640, 480, textos[3]);
    dibujarBoton(botonX, botonY, bbAncho, botonAlto, "Plantas");
    dibujarBoton(bax, botonY, bbAncho, botonAlto, bat);
    dibujarBoton(bbx, botonY, bbAncho, botonAlto, "Peces");
  } else if (estado === 4) {
    cargarImagensig(imagenes[4], 0, 0, 640, 480, textos[4]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 5) {
    cargarImagensig(imagenes[5], 0, 0, 640, 480, textos[5]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 6) {
    cargarImagensig(imagenes[6], 0, 0, 640, 480, textos[6]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 7) {
    cargarImagensig(imagenes[7], 0, 0, 640, 480, textos[7]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 8) {
    cargarImagensig(imagenes[8], 0, 0, 640, 480, textos[8]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 9) {
    cargarImagensig(imagenes[9], 0, 0, 640, 480, textos[9]);
    dibujarBoton(botonX, botonY, 180, botonAlto, "Realidad");
    dibujarBoton(bax, botonY, 180, botonAlto, bat);
    dibujarBoton(bbx, botonY, 180, botonAlto, "Seguir axolotl");
  } else if (estado === 10) {
    cargarImagensig(imagenes[10], 0, 0, 640, 480, textos[10]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 11) {
    cargarImagensig(imagenes[11], 0, 0, 640, 480, textos[11]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 12) {
    cargarImagensig(imagenes[12], 0, 0, 640, 480, textos[12]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 13) {
    cargarImagensig(imagenes[13], 0, 0, 640, 480, textos[13]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 14) {
    cargarImagensig(imagenes[14], 0, 0, 640, 480, textos[14]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, "Inicio");
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 15) {
    cargarImagensig(imagenes[15], 0, 0, 640, 480, textos[15]);
    dibujarBoton(botonX, botonY, 180, botonAlto, "Continuar");
    dibujarBoton(bax, botonY, 180, botonAlto, bat);
    dibujarBoton(bbx, botonY, 180, botonAlto, "Inicio");
  } else if (estado === 16) {
    cargarImagensig(imagenes[16], 0, 0, 640, 480, textos[16]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 17) {
    cargarImagensig(imagenes[17], 0, 0, 640, 480, textos[17]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 18) {
    cargarImagensig(imagenes[18], 0, 0, 640, 480, textos[18]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  } else if (estado === 19) {
    cargarImagensig(imagenes[19], 0, 0, 640, 480, textos[19]);
    dibujarBoton(botonX, botonY, 180, botonAlto, "Ver otro final");
    dibujarBoton(bax, botonY, 180, botonAlto, bat);
    dibujarBoton(bbx, botonY, 180, botonAlto, "Inicio");
  } else if (estado === 20) {
    cargarImagensig(imagenes[20], 0, 0, 640, 480, textos[20]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, "Inicio");
  }
}

function mousePressed() {
  if (estado === 0) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 1;
      if (!sonido.isPlaying()) {
        sonido.loop();
    }
    }
    if (detectarBoton(botonX, 350, botonAncho, botonAlto)) {
      estado = 20;
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
    if (detectarBoton(botonX, botonY, bbAncho, botonAlto)) {
      estado = 4;
    }
    if (detectarBoton(bax, botonY, bbAncho, botonAlto)) {
      estado = 2;
    }
    if (detectarBoton(bbx, botonY, bbAncho, botonAlto)) {
      estado = 5;
    }
  } else if (estado === 4) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 6;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 3;
    }
  } else if (estado === 5) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 6;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 3;
    }
  } else if (estado === 6) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 7;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 5;
    }
  } else if (estado === 7) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 8;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 6;
    }
  } else if (estado === 8) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 9;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 7;
    }
  } else if (estado === 9) {
    if (detectarBoton(botonX, botonY, bbAncho, botonAlto)) {
      estado = 10;
    }
    if (detectarBoton(bax, botonY, bbAncho, botonAlto)) {
      estado = 8;
    }
    if (detectarBoton(bbx, botonY, bbAncho, botonAlto)) {
      estado = 11;
    }
  } else if (estado === 10) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 15;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 9;
    }
  } else if (estado === 15) {
    if (detectarBoton(botonX, botonY, bbAncho, botonAlto)) {
      estado = 16;
    }
    if (detectarBoton(bax, botonY, bbAncho, botonAlto)) {
      estado = 9;
    }
    if (detectarBoton(bbx, botonY, bbAncho, botonAlto)) {
      estado = 0;
    }
  } else if (estado === 16) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 17;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 15;
    }
  } else if (estado === 17) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 18;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 16;
    }
  } else if (estado === 18) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 19;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 17;
    }
  } else if (estado === 19) {
    if (detectarBoton(botonX, botonY, bbAncho, botonAlto)) {
      estado = 9;
    }
    if (detectarBoton(bax, botonY, bbAncho, botonAlto)) {
      estado = 18;
    }
    if (detectarBoton(bbx, botonY, bbAncho, botonAlto)) {
      estado = 0;
    }
  } else if (estado === 11) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 12;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 9;
    }
  } else if (estado === 12) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 13;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 11;
    }
  } else if (estado === 13) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 14;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 12;
    }
  } else if (estado === 14) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 0;
    }
    if (detectarBoton(bax, botonY, botonAncho, botonAlto)) {
      estado = 13;
    }
  } else if (estado === 20) {
    if (detectarBoton(botonX, botonY, botonAncho, botonAlto)) {
      estado = 0;
    }
  }
}

//function cargarImagenEstado0(imagenFondo, imagenPNG) {
 // image(imagenFondo, 0, 0, 640, 480);
 // image(imagenPNG, textoX, 0, textoAncho, textoAlto);
//}

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
  rect(x, y, an, al, 8);
  fill(255);
  noStroke();
  textSize(25);
  textAlign(CENTER, CENTER);
  text(texto, x + an/2, y + al/2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}

function cargarImagensig(imag, x, y, ancho, alto, textos) {
  image(imag, x, y, ancho, alto);
  fill(255, 255, 255, 200);
    noStroke();
    rect(120, 295, 400, 110, 10);
    fill(0);
  textSize(16);
  text(textos, textoX, textoY, textoAncho, textoAlto);
}
