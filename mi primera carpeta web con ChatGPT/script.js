window.addEventListener('DOMContentLoaded', function() {
   
    const form = document.querySelector('#adopcion-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let isValid = true;
  
      inputs.forEach(function(input) {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
  
      if (!isValid) {
        alert('Por favor, completa todos los campos requeridos.');
      } else {
        // Aquí puedes agregar tu código para procesar los datos del formulario
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Solicitud de adopción enviada con éxito.';
        form.appendChild(successMessage);
        form.reset();
      }
    });
  });
  