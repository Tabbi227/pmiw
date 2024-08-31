/* 

 *Agustin Tabbita 119151/7
 *Tp1
 *Comision 1
 *Video Explicacion:
    https://youtu.be/wU4KvKHz_cs

*/

let obra;
let tam,cant=28.5;
let centroX=528, centroY=131;
let colorFondo, colorCuadrado;
let cambiarOrientacion = false;

function preload() {
    obra =loadImage('assets/Obra.jpeg');
}

function setup() {
  createCanvas (800,400);
  colorFondo = color(94,149,144);
  colorCuadrado = color(203, 53, 26);
  tam= width/cant;
}

function draw() {
  background(colorFondo);
  CuadradosRojos(5,5);
    for(let i=0;i<cant;i++) {
    for(let j=0; j<cant; j++) {
      Cuadrados(388+i*tam, -9+j*tam, tam);
    }
   }
  Rombos(388, -9, tam/4/2);
  image(obra,0,0,width/2,height);
}

function mousePressed() {
  ColoresOrientacion(color (random (255), random (255), random (255)), color (random (255), random (255), random (255)));
}

function ColoresOrientacion(colorRandom, colorRandom2) {
  if(mouseButton === LEFT){
    cambiarOrientacion=!cambiarOrientacion;
    colorFondo= colorRandom;
    colorCuadrado= colorRandom2;
  }else if (mouseButton === RIGHT){
    cambiarOrientacion=false;
    colorFondo = color(94,149,144);
    colorCuadrado = color(203, 53, 26);
  }
}

function Cuadrados(posx, posy, tam) {
  stroke(0);
  noFill();
  strokeWeight(2.5);
  rect(posx, posy, tam, tam);
}

function Rombos(posx, posy, romdivdos) {
  for(let i =0; i<cant; i++) {
    for(let j =0; j<cant; j++) {
      let x = posx +i*tam;
      let y = posy +j*tam;
      let rombo = tam/4;
      fill(0);
      stroke(1);
      quad(x, y-rombo, x+rombo, y,x, y+rombo, x-rombo, y);
      if (x>=centroX && x<=centroX+5*tam && y>=centroY && y<=centroY+5*tam) {
        stroke(255);
        strokeWeight(5);
        if(cambiarOrientacion) {
          line(x-romdivdos, y+romdivdos,x+romdivdos, y-romdivdos);
        }else {
          line(x-romdivdos, y-romdivdos,x+romdivdos, y+romdivdos);
        }
      }else {
        stroke(255);
        strokeWeight(5);
        if(cambiarOrientacion) {
          line(x-romdivdos, y-romdivdos,x+romdivdos, y+romdivdos);
        }else {
          line(x-romdivdos, y+romdivdos,x+romdivdos, y-romdivdos);
        }
      }
    }
  }
}

function CuadradosRojos(filas, columnas) {
  for(let i=0; i<filas; i++) {
    for(let j=0; j<columnas; j++) {
      fill(colorCuadrado);
      noStroke();
      rect(centroX+i*tam,centroY+j*tam,tam,tam);
    }
  }
}
  
  
