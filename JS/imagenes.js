// Obtener todos los elementos de imagen de la galería
const imagenes = document.querySelectorAll('.galeria-contenedor .imagen img');
const lightbox = document.getElementById('lightbox');
const lightboxImagen = document.querySelector('.lightbox-imagen');
const closeBtn = document.querySelector('.close');

// Función para abrir el lightbox
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImagen.src = imagen.src;
    });
});

// Función para cerrar el lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Cerrar el lightbox si se hace clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
