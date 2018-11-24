fetch('/datos/jsonDeJuegos.json')
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector('.total')
    var clase = "impar";
    var class_sp = "desc_sp";

    for(a =0; a <b.length; a++){
        if (b[a].descuento !==0){
            class_sp = "desc_sp"
        }
        else if (b[a].descuento ===0){
            class_sp = "desc_sp_nn"
        }

        if (b[a].variable2 === 1){
            var clase = "par"
        }
        else if (b[a].variable2 === 2) {
            var clase = "impar"
        }

        if (b[a].precio !=="Gratis")

        juegos.innerHTML += tarjetasJuegos(b[a].numero, clase, b[a].titulo, b[a].imagen, b[a].descripcionBreve, b[a].precio,class_sp, b[a].descuento);
    }
})
function pagJuegos(et){
    var seleccion = et.id;
    console.log(et);
    window.localStorage.setItem("id",seleccion);
}