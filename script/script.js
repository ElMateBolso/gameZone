fetch("http://localhost/datos/jsonDeJuegos.json")
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector(".total");
    var clase = "impar";

     for(var a =0; a <b.length;a++){

        juegos.innerHTML +="<div class='" + clase +"'><a href='game1.html'><h3 id='titulo'>" + b[a].titulo +"</h3><img src= '" + b[a].imagen +"' class='portada'></a><p>" + b[a].descripcionBreve +" <a href='game1.html'><strong class='transparent'>ver más</strong></a></p><a href='game1.html'><span class='price'><em>" + b[a].precio +"</em></span></a></div>";
        if (b[a].variable ===1){
            var clase = "par"
        }
        if (b[a].variable ===2) {
            var clase = "impar"
        }
        var precio = b[a].precio
        
    }

    
})