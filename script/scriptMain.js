
fetch ("http://localhost/datos/jsonDeJuegos.json")
.then(function(a){
    return a.json();    
})
.then(function(b){
    var top = document.querySelector(".tops");
    var topP = document.querySelector(".toppagos");
    var topG = document.querySelector(".topgratis");
    var contenedor = clase;
    var clase = "impar";
    for(a =0; a <b.length; a++){
        if (b[a].variable ===1){
            var clase = "par"
        }
        if (b[a].topVariable ==="impar") {
            var clase = "impar"
        }

        if(b[a].precio !== "Gratis" && b[a].top === true){
        topP.innerHTML +="<div class='" + clase +"'><a href='game1.html'><h3 class='titulo'>" + b[a].titulo +"</h3><p><img src='" + b[a].imagen +"' class='portada'></a>" + b[a].descripcionBreve +"<span class='categoria'>Categoría: " + b[a].categoria +"</span></p></div>";
    }
        else if(b[a].precio ==="Gratis" && b[a].top === true){
            topG.innerHTML +="<div class='" + clase +"'><h3 class='titulo'>" + b[a].titulo +"</h3><p><img src='" + b[a].imagen +"' class='portada'>" + b[a].descripcionBreve +"</div>";
        }
    }
})
