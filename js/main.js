function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Sensibilidad del scroll
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Escuchar el movimiento del mouse/scroll
window.addEventListener("scroll", reveal);

// Ejecutar al cargar para mostrar lo que ya está en pantalla
document.addEventListener("DOMContentLoaded", reveal);