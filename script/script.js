fetch("http://localhost/datos/jsonDeJuegos.json")
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector(".total");

    for(var a =0; a <b.length;a++){
        juegos.innerHTML +="<h3 id='titulo'>" + b[a].titulo +"</h3>";

        juegos.innerHTML +="<img src= '" + b[a].imagen +"' class='portada'>";
        }
    }
)