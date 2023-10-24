const body = document.body;
const darkModeButton = document.getElementById('dark-mode-button');

// Comprueba el modo actual en el almacenamiento local
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Aplica el modo al cargar la página
if (isDarkMode) {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}

darkModeButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Guarda el estado del modo en el almacenamiento local
    const currentMode = body.classList.contains('dark-mode') ? 'true' : 'false';
    localStorage.setItem('darkMode', currentMode);
      // Cambia la clase "toggled" para activar la animación de transición

    darkModeButton.classList.toggle('toggled');
}


// const offCanvasMenu = document.querySelector('.off-canvas');
// const navBar = document.querySelector('.nav-bar'); 
// darkModeButton.addEventListener('click', toggleDarkMode);

// // Agregar evento para mostrar/ocultar el menú off-canvas
// navBar.addEventListener('click', toggleOffCanvas);

// function toggleOffCanvas() {
//     offCanvasMenu.classList.toggle('open');
// }

// function toggleDarkMode() {
//     const body = document.body;
//     body.classList.toggle('dark-mode');
//     body.classList.toggle('light-mode');
//     darkModeButton.classList.toggle('toggled');
//     const currentMode = body.classList.contains('dark-mode') ? 'true' : 'false';
//     localStorage.setItem('darkMode', currentMode);
// }