// Selecciona todos los enlaces del menú y el checkbox del menú hamburguesa
const menuLinks = document.querySelectorAll('.navbar ul li a');
const menuToggle = document.querySelector('#menu-toggle');

// Agrega un evento de clic a cada enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Cierra el menú al desmarcar el checkbox
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});