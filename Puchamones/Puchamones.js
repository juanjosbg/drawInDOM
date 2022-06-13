var imagenes = [];
imagenes["wiki"] = "handy.jpg";
imagenes["flippy"] = "flippy.jpg";
imagenes["lifty"] = "lifty.jpg";


class Puchamon {
    constructor(nombre, tipo, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad) {

        /* Importante que en esta línea se guarda como atributo de la clase pókemon un elemento imagen HTML.*/
        this.imagen = new Image();
        this.nombre = nombre;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.ataqueEspecial = ataqueEspecial;
        this.defensaEspecial = defensaEspecial;
        this.velocidad = velocidad;
        this.imagen.src = imagenes[this.nombre];
    }
    hablar() {
        alert(this.nombre);
    }
    mostrar() {
       // var pk = document.getElementById("PK").classList.toggle("pokemons");

        var divCabecera = document.createElement('h1');
        divCabecera.innerHTML = this.nombre;
        divCabecera.setAttribute("class", "h1");

        var nuevaDiv = document.createElement("pokemons");

        nuevaDiv.appendChild(this.imagen);
        nuevaDiv.appendChild(divCabecera);
        document.body.appendChild(nuevaDiv);


        // creando tabla
        var coleccion = {
            'Nombre':this.nombre,
            'nombre': this.tipo,
            'Ataque': this.ataque,
            'Defensa': this.defensa,
            'Ataque Especial': this.ataqueEspecial,
            'Defensa Especial': this.defensaEspecial,
            'Velocidad': this.velocidad,
        };
        var tabla = document.createElement('table');
        var tbody = document.createElement('tbody');
        
        for (var poderesPersonajeus in coleccion) {
            var filaTexto = '<tr><td> ' + poderesPersonajeus + ' </tr></td> <tr><td>\
          '+ coleccion[poderesPersonajeus] + ' </tr></td>';
            var fila = document.createElement('tr');
            fila.innerHTML = filaTexto;
            tbody.appendChild(fila);
        };
        tabla.appendChild(tbody);
        nuevaDiv.appendChild(tabla);
    }
};


