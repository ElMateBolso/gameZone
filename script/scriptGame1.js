fetch("http://localhost/datos/jsonDeJuegos.json")
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector(".req");
    var clase = "impar";
    var numero = 1;
    if(numero === 1){

        // localStorage.setItem("titulo", b[a].titulo, "imagen", b[a].imagen);


    }
})