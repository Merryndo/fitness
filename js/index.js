 //Boton de ir hacia arriba//
 document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp(){
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
 if (currentScroll > 0){
  window.requestAnimationFrame(scrollUp);
  window.scrollTo (0, currentScroll - (currentScroll/10));//para que suba smooth//
  buttonUp.style.transform = "scale(0)";
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

// Image slider functions
let currentIndex = 0;
const images = document.querySelectorAll('.image');

function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.transform = 'translateX(0)';
      img.style.opacity = 1;
    } else {
      img.style.transform = `translateX(${100 * (i - index)}%)`;
      img.style.opacity = 0;
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
document.addEventListener('DOMContentLoaded', () => {
  showImage(0);
});
setInterval(nextImage, 5000);



// Accessibility toolbar functions
document.addEventListener("DOMContentLoaded", function () {
  const toolbar = document.querySelector(".pojo-a11y-toolbar");
  const toggleButton = document.querySelector(".pojo-a11y-toolbar-toggle");
  const closeButton = document.querySelector(".pojo-a11y-toolbar-close");
  const resetButton = document.querySelector(".pojo-a11y-btn-reset");
  let originalFontSize = window.getComputedStyle(document.body).fontSize;

  toggleButton.addEventListener("click", () => {
    toolbar.classList.toggle("pojo-a11y-toolbar-open");
  });

  closeButton.addEventListener("click", () => {
    toolbar.classList.remove("pojo-a11y-toolbar-open");
  });
 


// funcion para los enlaces del menu de accesibilidad//
  document.querySelectorAll(".pojo-a11y-toolbar-link-1").forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const action = button.dataset.action;
      handleAction(action);
    });
  });
  document.querySelector('.pojo-a11y-toolbar-toggle').addEventListener('click', function(event) {
    event.stopPropagation();
    const toolbar = document.querySelector(".pojo-a11y-toolbar");
    toolbar.classList.toggle("pojo-a11y-toolbar-open");
  }); 

  resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    resetChanges();
  });

  function handleAction(action) {
    switch (action) {
      case "resize-plus":
        resizeText(1.2);
        break;
      case "resize-minus":
        resizeText(0.8);
      case "invert-colors":
        document.body.classList.toggle("invert-colors");
        break;
      case "invert-gray":
        document.body.classList.toggle("invert-gray");
        break;
      default:
        break;
    }
  }
  
  function resizeText(scale) {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    const newSize = currentSize * scale;
    document.body.style.fontSize = `${newSize}px`;
  }

  function resetChanges() {
    document.body.style.fontSize = originalFontSize;
    document.body.classList.remove("invert-gray", "invert-colors");
  }
});

// Dropdown menu functions
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const closeMenuButton = document.querySelector('#close-menu');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

closeMenuButton.addEventListener('click', () => {
  dropdownMenu.classList.remove('show');
});
//para que se desplace hacia abajo al abrir el menu hamburguesa//
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

