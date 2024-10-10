// Selecciona el formulario con el ID "formulario" y agrega un evento que se ejecuta cuando el formulario es enviado
document.getElementById('formulario').addEventListener('submit', function(event) {
    
    // `event.preventDefault()` evita que el formulario se envíe automáticamente y recargue la página
    event.preventDefault();

    // Obtiene los valores de los campos de entrada del formulario y los almacena en variables
    const nombre = document.getElementById('nombre').value; // Valor del campo de nombre
    const edad = parseInt(document.getElementById('edad').value); // Valor del campo de edad (convertido a número entero)
    const correo = document.getElementById('correo').value; // Valor del campo de correo electrónico
    const resultado = document.getElementById('resultado'); // Elemento donde se mostrarán los mensajes de validación

    try {
        // Validación de cada campo usando funciones separadas. Si algún campo es inválido, se lanza un error con un mensaje específico
        if (!validarNombre(nombre)) {
            throw new Error('El nombre debe tener al menos 3 caracteres.');
        }
        if (!validarEdad(edad)) {
            throw new Error('La edad debe ser un número mayor a 18.');
        }
        if (!validarCorreo(correo)) {
            throw new Error('El correo electrónico no es válido.');
        }

        // Si todas las validaciones son correctas, se muestra un mensaje de éxito
        resultado.textContent = 'Formulario enviado correctamente.';
    } catch (error) {
        // Si ocurre algún error en las validaciones, se muestra el mensaje del error en el elemento de resultados
        resultado.textContent = error.message;
    }
});

// Función para validar el nombre. Retorna true si el nombre tiene al menos 3 caracteres
function validarNombre(nombre) {
    return nombre.length >= 3;
}

// Función para validar la edad. Retorna true si la edad es un número y es mayor a 18
function validarEdad(edad) {
    return typeof edad === 'number' && edad > 18;
}

// Función para validar el correo electrónico utilizando una expresión regular que comprueba el formato estándar
function validarCorreo(correo) {
    // Expresión regular para validar el formato del correo electrónico: debe tener al menos un carácter antes del @, seguido de un dominio válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo); // Retorna true si el correo coincide con el patrón de la expresión regular
}
