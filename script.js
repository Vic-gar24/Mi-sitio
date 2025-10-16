document.addEventListener("DOMContentLoaded", function() {

  const themeToggle = document.getElementById('theme-toggle');
  const form = document.getElementById('contact-form');

  // Cambiar tema
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      themeToggle.textContent = 'Cambiar a Tema Claro';
    } else {
      themeToggle.textContent = 'Cambiar Tema';
    }
  });

  // Mostrar alerta al enviar el formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Se ha enviado el mensaje correctamente ✅');
    form.reset();
  });

});

