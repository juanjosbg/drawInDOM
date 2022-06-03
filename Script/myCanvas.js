var draw = document.getElementById("myCanvas");
var lienzo = draw.getContext("2d");

var color = "black";

function lineas(color, xinicial, yinicial, xfinal, yfinal) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

/* Oreja */
lineas(color, 120, -290, 280, 100);
lineas(color, 240, 0, 190, 180);

/* Oreja */
lineas(color, 440, 120, 300, 90);

/* Cara */
lineas(color, 240, 0, 190, 180);


/* Contorno y demas */
lienzo.beginPath();
lienzo.arc(75,75,50,0,Math.PI*2,true);
lienzo.moveTo(110,75);


/* Para el ojo DR */
lienzo.beginPath();
lienzo.lineWidth = 0;
lienzo.arc(295, 195, 40, 1, 0,2 * Math.PI);
lienzo.fillStyle= "#dedede";
lienzo.fill();
lienzo.stroke();
lienzo.closePath();

/* Para la pupila ojo DR  */
lienzo.beginPath();
lienzo.lineWidth = 0;
lienzo.arc(299, 185, 27, 0,2 * Math.PI);
lienzo.fillStyle= "#fff";
lienzo.fill();
lienzo.stroke();
lienzo.closePath();

/* Para el ojo IZ */
lienzo.beginPath();
lienzo.lineWidth = 0;
lienzo.arc(445, 205, 40, 1, 0,2 * Math.PI);
lienzo.fillStyle= "#dedede";
lienzo.fill();
lienzo.stroke();
lienzo.closePath();

/* Para la pupila ojo IZ */
lienzo.beginPath();
lienzo.lineWidth = 0;
lienzo.arc(445, 205, 25, 0,2 * Math.PI);
lienzo.fillStyle= "#fff";
lienzo.fill();
lienzo.stroke();
lienzo.closePath();

/* Nariz */
lienzo.beginPath();
lienzo.moveTo(390, 249);
lienzo.lineTo(310, 250);
lienzo.arc(360,250,50,0,Math.PI,false);
lienzo.fillStyle= color;
lienzo.fill();
lienzo.stroke();
lienzo.closePath();


/* Boca */
lienzo.beginPath();
lienzo.moveTo(320,400);
lienzo.fillStyle="#464646";
lienzo.arc(360, 370, 36, 240, Math.PI + 1/2);
lienzo.fill();
lienzo.stroke();
lienzo.closePath();

/* Para la cara */
lienzo.beginPath();
lienzo.moveTo(190, 180);
lienzo.bezierCurveTo(200, 300, 200, 500, 290, 320);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle = color;
lienzo.rotate(5 * Math.PI / 90);
lienzo.fillRect(270, 100, 100, 15);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.rotate(7 / Math.PI / 140);
lienzo.fillRect(420, 90, 110, 15);
lienzo.stroke();
lienzo.closePath();
