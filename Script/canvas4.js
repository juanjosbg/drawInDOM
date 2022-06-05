var canvas = document.getElementById("myCanvas4");
var lienzo = canvas.getContext("2d");
var coordenadas = canvas.getBoundingClientRect();

var x = 0, y = 0, color="blue", grosor = 2;


function defColor(col) {
    color = col;
}
function dibujar(x1, y1, x2, y2) {
    lienzo.beginPath(); 
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();

}