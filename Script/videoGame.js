
var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


var fondo = {
    url: "/imgs/tile.png",
    cargaOK: false
};

var vaca = {
    url: "/imgs/vaca.png",
    cargaOK: false,
    x: [],//Creo una variable X y Y para vaca y pollo en arreglo y la de Gregson la inicializo en cero
    y: []
};

var cerdo = {
    url: "/imgs/cerdo.png",
    cargaOK: false,
    x: [],
    y: []
};

var pollo = {
    url: "/imgs/pollo.png",
    cargaOK: false,
    x: [],
    y: []
};

var Gregson = {
    url: "/imgs/humano.png",
    cargaOK: false,
    x: 0,
    y: 0
};

var cantidad = aleatorio(1, 50);

fondo.imagen = new Image();//creamos objeto
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);//escuchamos el evento de carga del navegador

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

Gregson.imagen = new Image();
Gregson.imagen.src = Gregson.url;
Gregson.imagen.addEventListener("load", cargarGregson);

function cargarFondo()//cuando ocurre el evento, se llama a estas funciones para que a su vez llamen la funcion de dibujar
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}


function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}

function cargarGregson() {
    Gregson.cargaOK = true;
    dibujar();
}


function dibujar()//aqui se evalua cual imagen ha cargado, para que siga el orden de carga que queremos
{

    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        for (var v = 0; v < cantidad; v++) {
            var x = (aleatorio(0, 7) * 60);
            var y = (aleatorio(0, 7) * 60);
            vaca.x[v] = x;
            vaca.y[v] = y;
            papel.drawImage(vaca.imagen, x, y);
            console.log(cantidad);
        }

    }

    if (cerdo.cargaOK) {
        for (var c = 0; p < cantidad; c++) {
            var x = (aleatorio(0, 7) * 60);
            var y = (aleatorio(0, 7) * 60);
            cerdo.x[p] = x;
            cerdo.y[p] = y;
            papel.drawImage(cerdo.imagen, x, y);
            console.log(cantidad);
        }
    }

    if (pollo.cargaOK) {
        for (var p = 0; p < cantidad; p++) {
            var x = (aleatorio(0, 7) * 60);
            var y = (aleatorio(0, 7) * 60);
            pollo.x[p] = x;
            pollo.y[p] = y;
            papel.drawImage(pollo.imagen, x, y);
            console.log(cantidad);
        }
    }

    if (Gregson.cargaOK) {
        var x = (aleatorio(0, 7) * 60);
        var y = (aleatorio(0, 7) * 60);
        Gregson.x = x;
        Gregson.y = y;
        papel.drawImage(Gregson.imagen, x, y);

    }
}


function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

function moverGregson(x, y) {
    papel.drawImage(Gregson.imagen, x, y);
}

function dibujarOtraVez()//redibujamos los objetos, solo que sin el ciclo y utilizando los numero aleatorios de la funcion dibujar
{
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        for (var v = 0; v < cantidad; v++) {
            papel.drawImage(vaca.imagen, vaca.x[v], vaca.y[v]);
            console.log(cantidad);
        }
    }
    if (cerdo.cargaOK) {
        for (var c = 0; v < cantidad; c++) {
            papel.drawImage(cerdo.imagen, cerdo.x[v], cerdo.y[v]);
            console.log(cantidad);
        }
    }
    if (pollo.cargaOK) {
        for (var p = 0; p < cantidad; p++) {
            papel.drawImage(pollo.imagen, pollo.x[p], pollo.y[p]);
            console.log(cantidad);
        }
    }
}

document.addEventListener("keyup", moverTecla);
function moverTecla(evento) {
    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarOtraVez();
            moverGregson(Gregson.x, Gregson.y);
            Gregson.y = Gregson.y - movimiento;
            break;
        case teclas.DOWN:
            dibujarOtraVez();
            moverGregson(Gregson.x, Gregson.y);
            Gregson.y = Gregson.y + movimiento;
            break;
        case teclas.LEFT:
            dibujarOtraVez();
            moverGregson(Gregson.x, Gregson.y);
            Gregson.x = Gregson.x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarOtraVez();
            moverGregson(Gregson.x, Gregson.y);
            Gregson.x = Gregson.x + movimiento;
            break;
        default:
            console.log("Otra tecla");
            break;
    }
}	