function submitForm(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var formMessage = document.getElementById('formMessage');
    fetch(form.action, {
        method: form.method,
        body: formData,
    })
        .then(function (response) {
        if (response.ok) {
            formMessage.textContent = '¡Mensaje enviado exitosamente!';
            formMessage.className = 'mt-4 text-center text-green-600';
            form.reset();
        }
        else {
            formMessage.textContent = 'Error al enviar el mensaje. Intenta de nuevo.';
            formMessage.className = 'mt-4 text-center text-red-600';
        }
    })
        .catch(function (error) {
        console.error('Error:', error);
        formMessage.textContent = 'Error al enviar el mensaje. Intenta de nuevo.';
        formMessage.className = 'mt-4 text-center text-red-600';
    });
    formMessage.classList.remove('hidden');
    return false;
}
