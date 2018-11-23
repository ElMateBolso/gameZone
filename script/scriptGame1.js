fetch("http://localhost/datos/jsonDeJuegos.json")
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector(".total");
    var idJuego = localStorage.getItem("id");

    for(var a =0; a <b.length; a++){
        if(b[a].numero == Number(idJuego)){
            juegos.innerHTML +="<h1>" + b[a].titulo +"</h1>"
        }
    }
})