fetch('/datos/jsonDeJuegos.json')
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector('.total')
    var clase = "impar"

    for(a =0; a <b.length; a++){

        if (b[a].precio !=="Gratis")
        juegos.innerHTML += tarjetasJuegos(clase, b[a].vinculo, b[a].numero, b[a].titulo, b[a].imagen, b[a].descripcionBreve, b[a].numero, b[a].vinculo, b[a].numero, b[a].precio);

        if (b[a].variable2 === 1){
            var clase = "par"
        }
        else if (b[a].variable2 === 2) {
            var clase = "impar"
        }
    }
})