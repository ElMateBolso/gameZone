fetch("http://localhost/datos/jsonDeJuegos.json")
.then (function(a){
    return a.json();
})
.then (function(b){
    var juego = document.querySelector(".total");

    for(var a =0; a <b.length; a++){
        
        juego.innerHTML +="<h1>"+ b[a].titulo +"</h1><img src='" + b[a].banner +"'>"
    }
})