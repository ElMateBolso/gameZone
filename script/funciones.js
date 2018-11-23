function tarjetasJuegos (numero, clase, titulo, imagen, descripcionBreve, precio){
var diseño = "<a href='game1.html' onclick='pagJuegos(this)' id='" + numero +"'><div class='" + clase +"'><h3 id='titulo'>" 
+ titulo +"</h3><img src= '" + imagen +"' class='portada'><p>" 
+ descripcionBreve +"<strong class='transparent'>ver más</strong></p><span>" + precio +"</span></div></a>";

return diseño;
}

// function pagJuegos(etiqueta){
//     var seleccion = etiqueta.id;
//     console.log(etiqueta)
//     window.localStorage.setItem("id",seleccion);
// }

function tarjetasJuegosTop(clase, numero, titulo, imagen, descripcion, categoria){
    var diseño = "<div class='" + clase +"'><a onclick='pagJuegos(this)' href='game1.html' class='juego" + numero +"'><h3 class='titulo'>" 
    + titulo +"</h3><p><img src='" + imagen +"' class='portada'></a>" 
    + descripcion +"<span class='categoria'>Categoría: " + categoria +"</span></p></div>";

return diseño;
}

function juegoPagina(titulo, imagen, descripcion, precio, categoria){
    var diseño = "<div><h2>" + titulo +"</h2><img src='" + imagen +"'><p>" + descripcion +" <span>" + precio +"</span><em>" + categoria +"</em></p>";

    return diseño;
}