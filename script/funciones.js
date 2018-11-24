function tarjetasJuegos (numero, clase, titulo, imagen, descripcionBreve, precio, class_sp, descuento){
var diseño = "<a href='game1.html' onclick='pagJuegos(this)' id='" + numero +"'><div class='" + clase +"'><h3 id='titulo'>" 
+ titulo +"</h3><img src= '" + imagen +"' class='portada'><p>" 
+ descripcionBreve +"<strong class='transparent'>ver más</strong></p><em class='comp_desc_em'><span>" + precio +"</span><span class='" + class_sp +"'>" + descuento +"%</span></em></div></a>";

return diseño;
}

// function pagJuegos(etiqueta){
//     var seleccion = etiqueta.id;
//     console.log(etiqueta)
//     window.localStorage.setItem("id",seleccion);
// }

function tarjetasJuegosTop(clase, numero, titulo, imagen, descripcion, categoria){
    var diseño = "<div class='" + clase +"'><a onclick='pagJuegos(this)' href='game1.html' id='" + numero +"'><h3 class='titulo'>" 
    + titulo +"</h3><p><img src='" + imagen +"' class='portada'></a>" 
    + descripcion +"<span class='categoria'>Categoría: " + categoria +"</span></p></div>";

return diseño;
}

// function requisitos(sisop, procesa, ram, disco, grafica){
//     var diseño = "<div class='req_min_cont'><h3>Requisitos Minimos</h3><ul class='req_min_ul'><li><em class='tit_li'>Sistema Operativo: </em>" 
//     + sisop +"</li><br><li><em class='tit_li'>Procesador: </em>" + procesa +"</li><br><li><em class='tit_li'>Memoria RAM: </em>" 
//     + ram +"</li><br><li><em class='tit_li'>Espacio de Disco: </em>" + disco +"</li><br><li><em class='tit_li'>Tarjeta Grafica: </em>" 
//     + grafica +"</li></ul></div>";

// return diseño;
// }