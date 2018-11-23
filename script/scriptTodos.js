fetch("http://localhost/datos/jsonDeJuegos.json")
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector(".total");
    var clase = "impar";

    for(var a =0; a <b.length; a++){

        // localStorage.setItem("titulo", b[a].titulo, "imagen", b[a].imagen);

        juegos.innerHTML += tarjetasJuegos(clase, b[a].vinculo, b[a].numero, b[a].titulo, b[a].imagen, b[a].descripcionBreve, b[a].numero, b[a].vinculo, b[a].numero, b[a].precio);
        if (b[a].variable ===1){
            var clase = "par"
        }
        else if (b[a].variable ===2) {
            var clase = "impar"
        }
    }
})