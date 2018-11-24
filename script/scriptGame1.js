fetch("/datos/jsonDeJuegos.json")
.then (function(a){
    return a.json();
})
.then (function(b){
    var juegos = document.querySelector(".total");
    var listas = document.querySelector(".list_cont")
    var idJuego = localStorage.getItem("id");

    for(var a =0; a <b.length; a++){ //Carga del JSON
        if(b[a].numero == Number(idJuego)){
            juegos.innerHTML +="<img src='" + b[a].banner +"' class='banner'><h1>" + b[a].titulo +"</h1><a href='compra.html' onclick='carrito(this)' id='" + b[a].numero +"'><span class='compra'>Obtener " 
            + b[a].precio +"</span></a><em class='val_em'>Valoración " + b[a].valoracion +"/10</em><div class='des'><p><span class='des_text'>Descripción: </span>" 
            + b[a].descripcion +"</p><div>"; //Carga del primer repaso de json, banner, titulo, precio, valoracion y descripcion

            for(var c =0; c <b[a].masImagenes.length; c++){
                juegos.innerHTML +="<h3>Mas Imagenes</h3><div class='mas_cont'><img src=" + b[a].masImagenes[c].secundaria1 +"><img src=" 
                + b[a].masImagenes[c].secundaria2 +"><img src=" + b[a].masImagenes[c].secundaria3 +"><img src=" 
                + b[a].masImagenes[c].secundaria4 +"><img src=" + b[a].masImagenes[c].secundaria5 +"></div>";
            } //Carga de imagenes secundarias

            for(var d =0; d <b[a].ficha.length; d++){
                listas.innerHTML +="<div class='fic_cont'><h3>Ficha Tecnica</h3><ul class='fic_ul'><li><em class='tit_li'>Desarrollo: </em>" 
                + b[a].ficha[d].desarrollo +"</li><br><li><em class='tit_li'>Producción: </em>" + b[a].ficha[d].produccion +"</li><br><li><em class='tit_li'>Distribución: </em>" 
                + b[a].ficha[d].distribucion +"</li><br><li><em class='tit_li'>Jugadores: </em>" + b[a].ficha[d].jugadores +"</li><br><li><em class='tit_li'>Formato: </em>" 
                + b[a].ficha[d].formato +"</li><br><li><em class='tit_li'>Textos: </em>" + b[a].ficha[d].textos +"</li><br><li><em class='tit_li'>Voces: </em>" 
                + b[a].ficha[d].voces +"</li><br><li><em class='tit_li'>Online: </em>" + b[a].ficha[d].online +"</li></ul></div>";
            } //Carga de ficha tecnica

            for(var e =0; e <b[a].reqMin.length; e++){
                listas.innerHTML +="<div class='req_min_cont'><h3>Requisitos Minimos</h3><ul class='req_min_ul'><li><em class='tit_li'>Sistema Operativo: </em>" 
                + b[a].reqMin[e].sisop +"</li><br><li><em class='tit_li'>Procesador: </em>" + b[a].reqMin[e].procesa +"</li><br><li><em class='tit_li'>Memoria RAM: </em>" 
                + b[a].reqMin[e].ram +"</li><br><li><em class='tit_li'>Espacio de Disco: </em>" + b[a].reqMin[e].disco +"</li><br><li><em class='tit_li'>Tarjeta Grafica: </em>" 
                + b[a].reqMin[e].grafica +"</li></ul></div>"
            } //carga de requisitos minimos

            for(var f =0; f <b[a].reqMax.length; f++){
                listas.innerHTML +="<div class='req_min_cont'><h3>Requisitos Minimos</h3><ul class='req_min_ul'><li><em class='tit_li'>Sistema Operativo: </em>" 
                + b[a].reqMax[f].sisop +"</li><br><li><em class='tit_li'>Procesador: </em>" + b[a].reqMax[f].procesa +"</li><br><li><em class='tit_li'>Memoria RAM: </em>" 
                + b[a].reqMax[f].ram +"</li><br><li><em class='tit_li'>Espacio de Disco: </em>" + b[a].reqMax[f].disco +"</li><br><li><em class='tit_li'>Tarjeta Grafica: </em>" 
                + b[a].reqMax[f].grafica +"</li></ul></div>"
            } //Carga de requisitos maximos
                
        }
    }
})

function carrito(etq){
    var slctr = etq.id;
    console.log(etq)
    window.localStorage.setItem("id",slctr);
}