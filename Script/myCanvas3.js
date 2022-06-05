var can3 = document.getElementById("myCanvas3");
var Select = document.getElementById("selectionLine");
Button.addEventListener("click", drawingForClick);

var lienzo = can3.getContext("2d");


function lineas(color, xinicial, yinicial, xfinal, yfinal) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function drawingForClick() {
    var line = parseInt(can3.value );
    var l = 0;
    var yi, xf;
    var color, color1, color2, color3;
    color = "#7FBBFF", color1 = "#74A9E6",
    color2 = "#66A1E6", color3 = "#395A80";

    for (l = 0; l < line; l++) {
        yi = 10 * l;
        xf = 150 * (1 + 1);

        lineas(color, 0, yi, xf, 300);
        console.log("lineas " + 1);
    }


    lineas(color, 1, 1, 1, 20);
    lineas(color, 1, 299, 299, 299);
}