fetch("http://localhost/datos/jsonDeJuegos.json")
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector(".total");
    var clase = "impar";
    
    for(var a =0; a <b.length; a++){

        juegos.innerHTML += tarjetasJuegos (b[a].numero, clase, b[a].titulo, b[a].imagen, b[a].descripcionBreve, b[a].precio)
        if (b[a].variable ===1){
            var clase = "par"
        }
        else if (b[a].variable ===2) {
            var clase = "impar"
        }
    }
});
function pagJuegos(et){
    var seleccion = et.id;
    console.log(et);
    window.localStorage.setItem("id",seleccion);
}


