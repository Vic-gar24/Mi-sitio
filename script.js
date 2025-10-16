// Script para cambiar entre tema claro y oscuro
const botonTema = document.getElementById('boton-tema');

botonTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        botonTema.textContent = 'Modo Claro';
    } else {
        botonTema.textContent = 'Cambiar Tema';
    }
});
