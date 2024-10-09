document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const correo = document.getElementById('correo').value;
    const resultado = document.getElementById('resultado');

    try {
        if (!validarNombre(nombre)) {
            throw new Error('El nombre debe tener al menos 3 caracteres.');
        }
        if (!validarEdad(edad)) {
            throw new Error('La edad debe ser un número mayor a 18.');
        }
        if (!validarCorreo(correo)) {
            throw new Error('El correo electrónico no es válido.');
        }

        resultado.textContent = 'Formulario enviado correctamente.';
    } catch (error) {
        resultado.textContent = error.message;
    }
});

function validarNombre(nombre) {
    return nombre.length >= 3;
}

function validarEdad(edad) {
    return typeof edad === 'number' && edad > 18;
}

function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
