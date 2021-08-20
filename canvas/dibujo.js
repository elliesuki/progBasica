var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xf, yi;
const colorcito = "pink";

for (l = 0; l < lineas; l++) {
  xf = 10 * l;
  yi = 10 * (l + 1);
  dibujarLinea(colorcito, 300, xf, yi, 0);
  console.log(l);
}
dibujarLinea(colorcito, 299, 1, 1, 1);
dibujarLinea(colorcito, 299, 299, 299, 1);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath;
}

// Ventanita
// dibujarLinea("red", 0, 300, 300, 300);
// dibujarLinea("blue", 0, 0, 0, 300);
// dibujarLinea("yellow", 0, 0 , 300, 0);
// dibujarLinea("green", 300, 300 , 300, 0);
// dibujarLinea("black", 150 , 0 , 150 , 300);
// dibujarLinea("black", 0 , 150 , 300, 150);

// Torre
