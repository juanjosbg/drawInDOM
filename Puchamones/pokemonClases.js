var imagenes = [];
imagenes["wiki"] = "handy.jpg";
imagenes["flippy"] = "flippy.jpg";
imagenes["lifty"] = "lifty.jpg";

// array que sirve para correr el ciclo "for-in".   name, tip, power, defensa, ataqueEspecial, defensaEspecial, velocidad
var pokedex = [];
pokedex.push(new Puchamon("wiki", "Constructor", 30, 80, 165, 65, 45));
pokedex.push(new Puchamon('flippy', "Soldado", 100, 90, 140, 90, 65));
pokedex.push(new Puchamon('lifty', "Cleptomania", 70, 50, 150, 64, 73));

// bucle para mostrar todos los objetos de la clase Pókemon
for (var i in pokedex) {
    pokedex[i].mostrar();
}

for (var freddito of pokedex){
    console.log(freddito);
}