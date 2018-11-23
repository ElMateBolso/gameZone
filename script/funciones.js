function tarjetasJuegos (clase, vinculo, numero, titulo, imagen, descripcion, numero, vinculo, numero, precio){
var diseño = "<div class='" + clase +"'><a href='"+ vinculo +".html' class='juego" + numero +"'><h3 id='titulo'>" 
+ titulo +"</h3><img src= '" + imagen +"' class='portada'></a><p>" 
+ descripcion +" <a href='"+ vinculo +".html' class='juego" + numero +"'><strong class='transparent'>ver más</strong></a></p><a href='"+ vinculo +".html' class='juego" 
+ numero +"'><span class='price'><em>" + precio +"</em></span></a></div>";

return diseño;
}

function tarjetasJuegosTop(clase, vinculo, numero, titulo, imagen, descripcion, categoria){
    var diseño = "<div class='" + clase +"'><a href='"+ vinculo +".html' class='juego" + numero +"'><h3 class='titulo'>" 
    + titulo +"</h3><p><img src='" + imagen +"' class='portada'></a>" 
    + descripcion +"<span class='categoria'>Categoría: " + categoria +"</span></p></div>";

return diseño;
}

function juegoPagina(titulo, imagen, descripcion, precio, categoria){
    var diseño = "<div><h2>" + titulo +"</h2><img src='" + imagen +"'><p>" + descripcion +" <span>" + precio +"</span><em>" + categoria +"</em></p>";

    return diseño;
}