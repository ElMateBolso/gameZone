fetch("/datos/jsonDeJuegos.json")
.then (function (a){
    return a.json();
})
.then (function (b){
    var juegos = document.querySelector(".total");
    var idJuego = localStorage.getItem("id");

    for(var a =0; a <b.length; a++){
        var precio = b[a].precio2;
        var precioIva = precio+(precio*0.22);
        var descuento = b[a].descuento/100;
        var precioTotal = precioIva+(precioIva*descuento);
        var form_env_cont = document.querySelector(".form_cont");
        
        if(b[a].numero == Number(idJuego && b[a].precio2 !== 0))
        juegos.innerHTML += datos(b[a].titulo, b[a].precio, precioIva, b[a].descuento, precioTotal, b[a].imagen);

        else if(b[a].numero == Number(idJuego) && b[a].precio2 === 0){
            juegos.innerHTML += datosGratis(b[a].titulo, b[a].precio, b[a].imagen);
        }
    }
    form_env_cont.innerHTML +="<div class='list_env'><div>";
})


function selectFormato(){

var formato1 = document.getElementById('form_chk1').checked;
var formato2 = document.getElementById('form_chk2').checked;
var list_env = document.querySelector(".list_env");

if (formato1 == true){
    list_env.innerHTML ="<form id='for_compra'><ul><li><em class='obj_tit'>Nombre: </em><input type='text' name='Nombre' class='input_name'  required autofocus maxlength='30'></li><li><em class='obj_tit'>Apellido: </em><input type='text' name='apellido' class='input_last' required maxlength='30'></li><li><em class='obj_tit'>Email: </em><input type='email' name='email' class='input_email' required></li><li><em class='obj_tit'>Dirección: </em><input type='text' name='direccion' class='input_dir' required maxlength='80'></li></ul><h5>Tipos de envio: </h5><br><span class='env'> Comun (0.5% del costo)</span><input type='radio' name='envio' value='op1' onclick='tipoEnvio()' class='radio3' id='op1'><br><span class='env'>Especial (2% del costo)</span> <input type='radio' name='envio' value='op2' onclick='tipoEnvio()' class='radio4' id='op2'><br><span class='env op'>Premium (5% del costo)</span> <input type='radio' name='envio' value='op3' onclick='tipoEnvio()' class='radio5' id='op3'><br><span class='precio_tot'></span><br><button class='btn_comp' onclick='confirmarCompra()' >Confirmar compra</button></form>";
}
if(formato2 == true){

    list_env.innerHTML ="<form id='for_compra'><ul><li><em class='obj_tit'>Nombre: </em><input type='text' name='Nombre' class='input_name'  required autofocus maxlength='30'></li><li><em class='obj_tit'>Apellido: </em><input type='text' name='apellido' class='input_last' required maxlength='30'></li><li><em class='obj_tit'>Email: </em><input type='email' name='email' class='input_email' required></li></ul><button class='btn_comp' onclick='confirmarCompra()' >Confirmar compra</button></form>"
}
}

function tipoEnvio(){
    var op1 = document.getElementById("op1").checked;
    var op2 = document.getElementById("op2").checked;
    var op3 = document.getElementById("op3").checked;
    var list_env = document.querySelector(".list_env");

    if(op1 == true){
        var valor = .005;
        console.log(valor);
        var precio = 12.50;
        var precioIva = precio+(precio*0.22);
        var descuento = 0/100;
        var precioTotal = precioIva+(precioIva*descuento);
        var val_env = precioTotal+(valor*precioTotal);
        console.log(val_env);

        list_env.innerHTML ="<form id='for_compra'><ul><li><em class='obj_tit'>Nombre: </em><input type='text' name='Nombre' class='input_name' id='nombre' required autofocus maxlength='30'></li><li><em class='obj_tit'>Apellido: </em><input type='text' name='apellido' class='input_last' id='apellido' required maxlength='30'></li><li><em class='obj_tit'>Email: </em><input type='email' name='email' class='input_email' id='email' required></li><li><em class='obj_tit'>Dirección: </em><input type='text' name='direccion' class='input_dir' id='direccion' required maxlength='80'></li></ul><h5>Tipos de envio: </h5><br><span class='env'> Comun (0.5% del costo)</span><input type='radio' name='envio' value='op1' onclick='tipoEnvio()' class='radio3' id='op1'><br><span class='env'>Especial (2% del costo)</span> <input type='radio' name='envio' value='op2' onclick='tipoEnvio()' class='radio4' id='op2'><br><span class='env op'>Premium (5% del costo)</span> <input type='radio' name='envio' value='op3' onclick='tipoEnvio()' class='radio5' id='op3'><br><span class'precio_tot'>Total a pagar: U$S " + val_env.toFixed(2) +"</span><br><button class='btn_comp' onclick='confirmarCompra()' >Confirmar compra</button></form>";
    }
    if(op2 == true){
        var valor = .02;
        console.log(valor);
        var precio = 12.50;
        var precioIva = precio+(precio*0.22);
        var descuento = 0/100;
        var precioTotal = precioIva+(precioIva*descuento);
        var val_env = precioTotal+(valor*precioTotal);
        console.log(val_env);
        list_env.innerHTML ="<form id='for_compra'><ul><li><em class='obj_tit'>Nombre: </em><input type='text' name='Nombre' class='input_name' id='nombre' required autofocus maxlength='30'></li><li><em class='obj_tit'>Apellido: </em><input type='text' name='apellido' class='input_last' id='apellido' required maxlength='30'></li><li><em class='obj_tit'>Email: </em><input type='email' name='email' class='input_email' id='email' required></li><li><em class='obj_tit'>Dirección: </em><input type='text' name='direccion' class='input_dir' id='direccion' required maxlength='80'></li></ul><h5>Tipos de envio: </h5><br><span class='env'> Comun (0.5% del costo)</span><input type='radio' name='envio' value='op1' onclick='tipoEnvio()' class='radio3' id='op1'><br><span class='env'>Especial (2% del costo)</span> <input type='radio' name='envio' value='op2' onclick='tipoEnvio()' class='radio4' id='op2'><br><span class='env op'>Premium (5% del costo)</span> <input type='radio' name='envio' value='op3' onclick='tipoEnvio()' class='radio5' id='op3'><br><span class'precio_tot'>Total a pagar: U$S " + val_env.toFixed(2) +"</span><br><button class='btn_comp' onclick='confirmarCompra()' >Confirmar compra</button></form>"
    }
    if(op3 == true){
        var valor = .05;
        console.log(valor);
        var precio = 12.50;
        var precioIva = precio+(precio*0.22);
        var descuento = 0/100;
        var precioTotal = precioIva+(precioIva*descuento);
        var val_env = precioTotal+(valor*precioTotal);
        console.log(val_env);
        list_env.innerHTML ="<form id='for_compra'><ul><li><em class='obj_tit'>Nombre: </em><input type='text' name='Nombre' class='input_name' id='nombre' required autofocus maxlength='30'></li><li><em class='obj_tit'>Apellido: </em><input type='text' name='apellido' class='input_last' id='apellido' required maxlength='30'></li><li><em class='obj_tit'>Email: </em><input type='email' name='email' class='input_email' id='email' required></li><li><em class='obj_tit'>Dirección: </em><input type='text' name='direccion' class='input_dir' id='direccion' required maxlength='80'></li></ul><h5>Tipos de envio: </h5><br><span class='env'> Comun (0.5% del costo)</span><input type='radio' name='envio' value='op1' onclick='tipoEnvio()' class='radio3' id='op1'><br><span class='env'>Especial (2% del costo)</span> <input type='radio' name='envio' value='op2' onclick='tipoEnvio()' class='radio4' id='op2'><br><span class='env op'>Premium (5% del costo)</span> <input type='radio' name='envio' value='op3' onclick='tipoEnvio()' class='radio5' id='op3'><br><span class'precio_tot'>Total a pagar: U$S " + val_env.toFixed(2) +"</span><br><button class='btn_comp' onclick='confirmarCompra()' >Confirmar compra</button></form>"
    }
}
function confirmarCompra(){
    var juegos = document.querySelector(".total");
    var nom = document.getElementById("nombre").Value;

    console.log(nom);

    // juegos.innerHTML = "";
    alert("Felicidades, usted acaba de adquirir este juego");
}