// Mostrar mensaje al hacer clic
function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = "¡Hola! Has hecho clic en el botón. 🚀";
}

// Validación del formulario
(function() {
    'use strict';

    const form = document.getElementById('contactoForm');
    const alerta = document.getElementById('alertaExito');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            alerta.classList.remove('d-none');
            form.reset();
            form.classList.remove('was-validated');
        } else {
            alerta.classList.add('d-none');
            form.classList.add('was-validated');
        }
    }, false);

})();

/*SLIDER*/
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

//mueve el slider en la direccion especificada (1 para avanzar, -1 para retroceder)
function moveSlide(direction) {
    currentIndex += direction;

    //asegura que el indice este dentro de los limites
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;//vuelve a la primara imagen
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;//vuelve a la ultima
    }
    updateSliderPosition();
}

// actualiza la posición del slider segun el indice actual
function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    const offset = -currentIndex * 100;//calcula el desplazamiento en porcentaje
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveSlide(1);
}, 10000);

$(document).ready(function() {
    $(".menu-movil").hide();

    // Mostrar/ocultar el menú
    $(".logo-movil .logo-hambur").click(function() {
        $(".menu-movil").slideToggle();
        $(".logo-movil .logo-hambur").toggle();
        $(".logo-movil .logo-error").toggle();
    });

    $(".logo-movil .logo-error").click(function() {
        $(".menu-movil").slideToggle();
        $(".logo-movil .logo-hambur").toggle();
        $(".logo-movil .logo-error").toggle();
    });

    // Cerrar el menú cuando se haga clic en un enlace
    $(".menu-movil a").click(function() {
        $(".menu-movil").slideUp(); // Cierra el menú
        $(".logo-movil .logo-hambur").show(); // Muestra el ícono de hamburguesa
        $(".logo-movil .logo-error").hide(); // Oculta el ícono de error
    });
});
