function submitForm(event: Event): boolean {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formMessage = document.getElementById('formMessage') as HTMLDivElement;

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          formMessage.textContent = '¡Mensaje enviado exitosamente!';
          formMessage.className = 'mt-4 text-center text-green-600';
          form.reset();
        } else {
          formMessage.textContent = 'Error al enviar el mensaje. Intenta de nuevo.';
          formMessage.className = 'mt-4 text-center text-red-600';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        formMessage.textContent = 'Error al enviar el mensaje. Intenta de nuevo.';
        formMessage.className = 'mt-4 text-center text-red-600';
      });

    formMessage.classList.remove('hidden');
    return false;
  }

