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

function datos(titulo, precio, precioIva, descuento, precioTotal, imagen){
    var valores = "<div class='form_cont'><h3>Usted ha iniciado el proceso de compra</h3><br><ul><li><em class='obj_tit'>Juego a comprar</em>: " 
    + titulo +"</li><li><em class='obj_tit'>Precio del juego: </em>" 
    + precio +"</li><li><em class='obj_tit'>Subtotal</em>: U$S " 
    + precioIva.toFixed(2) +"</li><li><em class='obj_tit'>Descuento</em>: % " 
    + descuento +"</li><li><em class='obj_tit'>Precio Total</em>: U$S " 
    + precioTotal.toFixed(2) +"</li><li class='for_env'><em class='obj_tit'>Seleccione un formato</em>: <span class='fis'>Físico</span> <input type='radio' name='formato' value='fisico' onclick='selectFormato()' class='radio1' id='form_chk1'><br> <span class='dig'>Digital</span> <input type='radio' name='formato' value='digital' onclick='selectFormato()' class='radio2' id='form_chk2'></li></ul><img src='" 
    + imagen +"'></div>";

    return valores;
}
function datosGratis(titulo, precio, imagen){
    var valores = "<div class='form_cont'><h3>Usted ha iniciado el proceso de compra</h3><br><ul><li><em class='obj_tit'>Juego a comprar</em>: " 
    + titulo +"</li><li><em class='obj_tit'>Precio del juego: </em>" 
    + precio +"</li></ul><img src='" 
    + imagen +"'><form id='for_compra'><ul><li><em class='obj_tit'>Nombre: </em><input type='text' name='Nombre' class='input_name'  required autofocus maxlength='30'></li><li><em class='obj_tit'>Apellido: </em><input type='text' name='apellido' class='input_last' required maxlength='30'></li><li><em class='obj_tit'>Email: </em><input type='email' name='email' class='input_email' required></li></ul><button class='btn_comp' onclick='confirmarCompra2()' >Confirmar compra</button></form><br><button class='btn_comp' onclick='confirmarCompra()' >Confirmar compra</button></div>"

    return valores;
}
    // var precio = b[a].precio2;
    // var precioIva = precio+(precio*0.22);
    // var descuento = b[a].descuento/100;
    // var precioTotal = precioIva+(precioIva*descuento);
    // var form_env_cont = document.querySelector(".form_cont");

// function requisitos(sisop, procesa, ram, disco, grafica){
//     var diseño = "<div class='req_min_cont'><h3>Requisitos Minimos</h3><ul class='req_min_ul'><li><em class='tit_li'>Sistema Operativo: </em>" 
//     + sisop +"</li><br><li><em class='tit_li'>Procesador: </em>" + procesa +"</li><br><li><em class='tit_li'>Memoria RAM: </em>" 
//     + ram +"</li><br><li><em class='tit_li'>Espacio de Disco: </em>" + disco +"</li><br><li><em class='tit_li'>Tarjeta Grafica: </em>" 
//     + grafica +"</li></ul></div>";

// return diseño;
// }