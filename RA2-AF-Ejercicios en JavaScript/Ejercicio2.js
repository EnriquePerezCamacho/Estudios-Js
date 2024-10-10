// Asignar un evento 'click' al botón con id "convertir" para que ejecute la función de conversión cuando se presione
document.getElementById('convertir').addEventListener('click', function() {
    
    // Obtener el valor de la temperatura desde el campo de entrada y convertirlo a número decimal
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    
    // Obtener la dirección de conversión seleccionada en el menú desplegable (puede ser 'CtoF' o 'FtoC')
    const direccion = document.getElementById('direccion').value;
    
    // Obtener el elemento <p> donde se mostrará el resultado de la conversión
    const resultado = document.getElementById('resultado');

    try {
        // Validación: Comprobar que la temperatura ingresada sea un número válido
        if (typeof temperatura !== 'number' || isNaN(temperatura)) {
            // Si la temperatura no es un número, se lanza un error personalizado
            throw new Error('Por favor, introduce un número válido.');
        }

        // Variable para almacenar la temperatura convertida
        let tempConvertida;

        // Evaluar la dirección de conversión seleccionada por el usuario
        switch (direccion) {
            case 'CtoF':  // Convertir de Celsius a Fahrenheit
                // Fórmula para convertir de Celsius a Fahrenheit: (°C × 9/5) + 32
                tempConvertida = (temperatura * 9/5) + 32;

                // Mostrar el resultado en el párrafo, formateando el valor a 2 decimales
                resultado.textContent = `${temperatura} °C es igual a ${tempConvertida.toFixed(2)} °F`;
                break;

            case 'FtoC':  // Convertir de Fahrenheit a Celsius
                // Fórmula para convertir de Fahrenheit a Celsius: (°F − 32) × 5/9
                tempConvertida = (temperatura - 32) * 5/9;

                // Mostrar el resultado en el párrafo, formateando el valor a 2 decimales
                resultado.textContent = `${temperatura} °F es igual a ${tempConvertida.toFixed(2)} °C`;
                break;

            default:
                // Si el valor de `direccion` no es 'CtoF' ni 'FtoC', se lanza un error personalizado
                throw new Error('Dirección de conversión no válida.');
        }
    } catch (error) {
        // Mostrar el mensaje de error en el párrafo `resultado` si ocurre alguna excepción
        resultado.textContent = error.message;
    }
});
