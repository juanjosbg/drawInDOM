var draw = document.getElementById("myCanvas2");
var lienzo = draw.getContext("2d");

var line = 30;
var l = 0;
var yi, xf, Yi, XF;
var color,color1,color2,color3;

color = "#7FBBFF", 
color1 = "#74A9E6", 
color2 = "#66A1E6", 
color3 = "#395A80";

function lineas(color, xinicial, yinicial, xfinal, yfinal) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
for (l = 0; l < line; l++) {
    yi = 10 * l;
    xf = 150 * (1 + 1);

    lineas(color, 0, yi, xf, 300);
    console.log("lineas " + 1);
}


lineas(color, 1, 1, 1, 20);
lineas(color, 1, 299, 299, 299);

for (l = 0; l < line; l++) {
    yi  = 149 * (1 + 1);
    xf= 10 * l;
    
    lineas(color1, 0, yi, xf, 0);
    console.log("lineas " + 1);
}

lineas(color1, 310, -8, 0, 300);
lineas(color1, 1, 1, 1, 20);

for (l = 0; l < line; l++) {
    Yi = 10 * l; 
    XF = 149 * (1 + 1);
    
    lineas(color2, -290, Yi, XF, 300);
    console.log("lineas " + 1);
}

lineas(color1, 1, 1, 1, 20);
lineas(color1, -310, -8, 0, 300);
