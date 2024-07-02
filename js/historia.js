 //Boton de ir hacia arriba//
 document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
 if (currentScroll > 0){
  window.requestAnimationFrame(scrollUp);
  window.scrollTo (0, currentScroll - (currentScroll/10));//para que suba smooth//
 }

}
// este es el codigo del scroll para que aparezca y desapar4ezca el boton
buttonUp = document.getElementById("button-up");
window.onscroll = function(){
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (scroll > 200){ //para que aparezca cuando pasas los 100
    buttonUp.style.transform = "scale(1)";
  }
  else if(scroll < 100){// para que desaparezca al volver a subir
    buttonUp.style.transform = "scale(0)";
  }
}
// para que se desplace todo hacia abajo al abrir el menu hamburguesa//
var elemento=document.getElementsByClassName("Servicios");
var boton=document.getElementsByClassName("navbar-toggler");

function Faplastar(){
    //alert("aqui");
    for(var  i = 0; i < elemento.length; i++)
        elemento[i].classList.add("aplastar");
}
boton[0].addEventListener("click",Faplastar);
/////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    var elementos = document.getElementsByClassName("Servicios");
    var boton = document.getElementsByClassName("navbar-toggler")[0];

    function Faplastar() {
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].classList.add("aplastar");
        }
    }

    function quitar(e) {
        if (e.matches) {
            for (var i = 0; i < elementos.length; i++) {
                elementos[i].classList.remove("aplastar");
            }
        }
    }

    boton.addEventListener("click", Faplastar);

    // Definir la media query
    var mediaQuery = window.matchMedia("(min-width: 768px)");

    // Añadir el listener a la media query
    mediaQuery.addListener(quitar);

    // Comprobar el estado inicial
    quitar(mediaQuery);
});
