
fetch ("http://localhost/datos/jsonDeJuegos.json")
.then(function(a){
    return a.json();    
})
.then(function(b){
    var topP = document.querySelector(".toppagos");
    var topG = document.querySelector(".topgratis");
    var clase = "impar";
    for(a =0; a <b.length; a++){
        if (b[a].variable ===1){
            var clase = "par"
        }
        if (b[a].topVariable ==="impar") {
            var clase = "impar"
        }

        if(b[a].precio !== "Gratis" && b[a].top === true){
            topP.innerHTML += tarjetasJuegosTop(clase, b[a].numero, b[a].titulo, b[a].imagen, b[a].descripcionBreve, b[a].categoria);
    }
        else if(b[a].precio ==="Gratis" && b[a].top === true){
            topG.innerHTML += tarjetasJuegosTop(clase, b[a].numero, b[a].titulo, b[a].imagen, b[a].descripcionBreve, b[a].categoria);
        }
    }
})
