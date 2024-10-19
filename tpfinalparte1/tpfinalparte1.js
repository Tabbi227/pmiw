/* 

 *Agustin Tabbita 119151/7
 *Tp1
 *Comision 1
 *Video Explicacion:
    https:/

*/

let imagenes = [];
let imagenTexto0;
let estado = 0;
let textos = ["AXOLOTL",
"Visité el jardín zoológico casi todas las tardes. Me gustaba mirar los axolotls en su estanque. Eran criaturas misteriosas, con ojos que parecían sonreír. Su mirada me hipnotizaba. Me sentía atraído por su mundo submarino. Quería entenderlos.",
"Me senté frente al estanque y los observé. Sus movimientos eran lentos y gráciles. Parecían bailar en el agua. Sus ojos me miraban con curiosidad. Me sentí conectado a ellos. Quería saber más.",
"Comencé a sentir una conexión emocional con los axolotls. Me imaginaba a mí mismo en su lugar. Sentía su tranquilidad y paz. Quería ser uno de ellos. Su mundo era más atractivo que el mío.",
"Me imaginé que me convertía en un axolotl. Sentía el agua rodeándome. Mi respiración se volvió lenta y profunda. Mi visión se amplió. Veía el mundo desde una nueva perspectiva.",
"Descubrí un mundo lleno de belleza y misterio. Las plantas acuáticas me rodeaban. Los peces nadaban a mi alrededor. Sentía la libertad de estar en el agua. Era parte del ecosistema.",
"Intenté comunicarme con los axolotls. Pero no había palabras. Solo gestos y miradas. Sentí una profunda conexión. Entendí su lenguaje silencioso.",
"Me identifiqué con los axolotls. Sentí su soledad y marginación. Comprendí su condición de criaturas olvidadas. Me sentí solidario con ellos. Eran mis hermanos.",
"Me convertí en un axolotl. Mi cuerpo se transformó. Mis sentidos se ampliaron. Sentía el mundo de manera diferente. Era uno de ellos.",
"Sentí una profunda liberación. Era libre de ser yo mismo. No había límites ni fronteras. Era parte del universo. Era uno con todo.",
"Regresé a mi forma humana. Pero no era el mismo. Había cambiado. Había entendido algo nuevo. Me sentí renovado y transformado.",
"Me convertí en un axolotl para siempre. Mi cuerpo se adaptó al agua. Mis sentidos se ampliaron. Sentía el mundo de manera diferente. Era uno de ellos.",
"Viví entre los axolotls, aprendiendo su lenguaje. Compartí su comida y su refugio. Me convertí en parte del ecosistema. Sentía la armonía del universo.",
"Descubrí que los axolotls eran inmortales. Su ciclo de vida se repetía eternamente. Me uní a ese ciclo, libre de preocupaciones.Era parte de la eternidad.",
"Me fusioné con el universo, sin límites. Era uno con todo, sin distinciones.La conciencia se expandió, infinita. Era la unidad absoluta.",
"Desperté en el jardín zoológico, confundido. Recordé mi experiencia como axolotl. Pero parecía un sueño lejano. Me sentí desconectado de la realidad.",
"Reflexioné sobre mi experiencia. Comprendí la conexión entre humanos y animales. Sentí una nueva empatía hacia los axolotls. Me comprometí a protegerlos.",
"Decidí compartir mi experiencia con otros. Escribí un libro sobre mi transformación. La gente se interesó en los axolotls. Se creó un movimiento para protegerlos.",
"Mi historia inspiró a futuras generaciones. Los axolotls fueron protegidos y respetados. Dejé un legado de amor y comprensión. Mi transformación no fue en vano.",
"FIN",
"CREDITOS\n Candela Melino \n Agustin Tabbita"];

let botonX = 430;
let botonY = 420;
let botonAncho = 200;
let botonAlto = 50;
let botonTexto = "Siguiente";
let bax = 50;
let bat = "Atrás";
let num = 0;
let textoX = 120;
let textoY = 150;
let textoAncho = 400;
let textoAlto = 400;

function preload(){
  for (let i=0; i<19; i++) {
    imagenes[i] = loadImage("data/fondo"+i+".jpg")
  }
  imagenTexto0 = loadImage("data/texto0.png")
}
function setup() {
  createCanvas(640, 480);
  estado = 0;
}

function draw() {
  background(200)
  
  
  if (estado === 0) {
    cargarImagenEstado0(imagenes[0], imagenTexto0);
    //cargarImagensig(imagenes[0],0,0,640, 480, textos[0]);
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
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 5) {
    cargarImagensig(imagenes[5],0,0,640, 480, textos[5]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 6) {
    cargarImagensig(imagenes[6],0,0,640, 480, textos[6]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 7) {
    cargarImagensig(imagenes[7],0,0,640, 480, textos[7]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 8) {
    cargarImagensig(imagenes[8],0,0,640, 480, textos[8]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 9) {
    cargarImagensig(imagenes[9],0,0,640, 480, textos[9]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 10) {
    cargarImagensig(imagenes[10],0,0,640, 480, textos[10]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 11) {
    cargarImagensig(imagenes[11],0,0,640, 480, textos[11]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 12) {
    cargarImagensig(imagenes[12],0,0,640, 480, textos[12]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 13) {
    cargarImagensig(imagenes[13],0,0,640, 480, textos[13]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 14) {
    cargarImagensig(imagenes[14],0,0,640, 480, textos[14]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 15) {
    cargarImagensig(imagenes[15],0,0,640, 480, textos[15]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 16) {
    cargarImagensig(imagenes[16],0,0,640, 480, textos[16]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 17) {
    cargarImagensig(imagenes[17],0,0,640, 480, textos[17]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 18) {
    cargarImagensig(imagenes[18],0,0,640, 480, textos[18]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
    dibujarBoton(bax, botonY, botonAncho, botonAlto, bat);
  }else if (estado === 19) {
    cargarImagensig(imagenes[19],0,0,640, 480, textos[19]);
    dibujarBoton(botonX, botonY, botonAncho, botonAlto, botonTexto);
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

function cargarImagenEstado0(imagenFondo, imagenPNG) {
  image(imagenFondo, 0, 0, 640, 480);
  image(imagenPNG, textoX, 0, textoAncho, textoAlto);
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
   fill(255,255,255,200)
   noStroke()
   rect(textoX, textoY, textoAncho, textoAlto, 10)
   fill(0);
   textSize(16);
   text(texto, textoX, textoY, textoAncho, textoAlto);
}
