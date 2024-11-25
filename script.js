// Obtener el botón de hamburguesa y el menú
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Agregar un evento de clic al botón de hamburguesa
hamburgerMenu.addEventListener('click', () => {
    // Toggle: alterna la visibilidad del menú
    navLinks.classList.toggle('active');
});


// Obtener los elementos del modal y el ícono de notificación
const notificationIcon = document.getElementById('notification-icon');
const modal = document.getElementById('notification-modal');
const closeModal = document.getElementById('close-modal');

// Mostrar el modal cuando se hace clic en el ícono de notificación
notificationIcon.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el modal cuando se hace clic en el "x"
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Datos de ejemplo para las publicaciones del blog
const posts = [
    { title: "Reciclaje en casa", content: "Aprende cómo puedes reciclar de manera efectiva en tu hogar. ¡Es fácil y ayuda mucho al planeta!" },
    { title: "Beneficios del reciclaje", content: "Descubre cómo el reciclaje puede mejorar la salud de nuestro planeta y nuestra vida diaria." },
    { title: "Cómo reducir tu huella de carbono", content: "Una pequeña guía para empezar a reducir tu huella de carbono a través de acciones sencillas." },
    { title: "La importancia de la energía renovable", content: "Entiende por qué las energías renovables son clave para un futuro sostenible." },
];

// Función para cargar las publicaciones
function loadPosts() {
    const container = document.getElementById('blog-posts-container');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.content}</p>
        `;
        container.appendChild(postElement);
    });
}

// Mostrar más publicaciones
document.getElementById('load-more').addEventListener('click', loadPosts);

// Cargar las primeras publicaciones al iniciar la página
loadPosts();

// Menú móvil
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
