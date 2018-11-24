fetch("/datos/jsonDeJuegos.json")
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector(".total");
    var idJuego = localStorage.getItem("id");

    for(var a =0; a <b.length; a++){

        var precio = b[a].precio2;
        var precioIva = precio+(precio*0.22);
        var descuento = b[a].descuento/100;
        var precioTotal = precioIva+(precioIva*descuento);
        var btn_comp = "conf_comp";
        
        if(b[a].numero == Number(idJuego))
        juegos.innerHTML +="<div class='form_cont'><h3>Usted ha iniciado el proceso de compra</h3><br><ul><li><em class='obj_tit'>Juego a comprar</em>: " 
        + b[a].titulo +"</li><li><em class='obj_tit'>Precio del juego: </em>" 
        + b[a].precio +"</li><li><em class='obj_tit'>Subtotal</em>: U$S " 
        + precioIva +"</li><li><em class='obj_tit'>Descuento</em>: % " 
        + b[a].descuento +"</li><li><em class='obj_tit'>Precio Total</em>: U$S " 
        + precioTotal +"</li><li><em class='obj_tit'>Seleccione un formato</em>: Físico <input type='radio' name='formato' value='fisico' onclick='slct_format(this)' id='format'><br> Digital <input type='radio' name='formato' value='digital' onclick='slct_format(this)' id='format'></li></ul><button class='" 
        + btn_comp + "' onclick='confirmarCompra()'>Confirmar compra</button><img src='" 
        + b[a].imagen +"'></div>";
    }
})

function slct_format(slct){
var form_env_cont = document.querySelector(".form_cont");
// var rdo_btn = document.getElementsByName("formato");
// var rdo_btn = slct.value;
if(slct.value == "fisico"){
    btn_comp = "conf_comp_nn";
    form_env_cont.innerHTML +="<form>Nombre<input type='text' name='nombre' required autofocus maxlength='30'></form>";
    check;
}
// for(var i =0; i<rdo_btn.length; i++){

//     if(rdo_btn[i].checked){
//         console.log(rdo_btn.value);
//     }
// }
}