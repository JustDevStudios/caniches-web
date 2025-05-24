// Índice de la diapositiva actual
let slideIndex = 1;

// Muestra la primera diapositiva al cargar la página
showSlides(slideIndex);

// Avanza automáticamente cada 5 segundos
let autoSlideInterval = setInterval(() => plusSlides(1), 5000);

/**
 * Función para avanzar o retroceder en el carrusel.
 * Se llama al hacer clic en los botones "prev" o "next".
 * @param {number} n - Número de posiciones a avanzar o retroceder
 */
function plusSlides(n) {
    showSlides(slideIndex += n);
    resetAutoSlide(); // Reinicia el temporizador para que no se solapen
}

/**
 * Muestra una diapositiva específica al hacer clic en un punto (dot).
 * @param {number} n - Número de la diapositiva que se quiere mostrar
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoSlide(); // Reinicia el temporizador para que no se solapen
}

/**
 * Función principal que muestra la diapositiva actual y oculta las demás.
 * También actualiza el estado activo de los puntos de navegación.
 * @param {number} n - Índice de la diapositiva a mostrar
 */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Todas las diapositivas
    let dots = document.getElementsByClassName("dot");        // Todos los puntos de navegación

    if (slides.length === 0 || dots.length === 0) return; // Seguridad

    // Si el índice es mayor al número de diapositivas, vuelve al inicio
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Si el índice es menor a 1, va al final
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Oculta todas las diapositivas
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Elimina la clase "active" de todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Muestra la diapositiva actual
    slides[slideIndex - 1].style.display = "block";

    // Marca el punto correspondiente como activo
    dots[slideIndex - 1].classList.add("active");
}

/**
 * Reinicia el temporizador automático para evitar que el carrusel
 * avance justo después de un clic manual.
 */
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => plusSlides(1), 5000);
}
