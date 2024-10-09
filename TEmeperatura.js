document.getElementById('convertir').addEventListener('click', function() {
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const direccion = document.getElementById('direccion').value;
    const resultado = document.getElementById('resultado');

    try {
        if (typeof temperatura !== 'number' || isNaN(temperatura)) {
            throw new Error('Por favor, introduce un número válido.');
        }

        let tempConvertida;
        switch (direccion) {
            case 'CtoF':
                tempConvertida = (temperatura * 9/5) + 32;
                resultado.textContent = `${temperatura} °C es igual a ${tempConvertida.toFixed(2)} °F`;
                break;
            case 'FtoC':
                tempConvertida = (temperatura - 32) * 5/9;
                resultado.textContent = `${temperatura} °F es igual a ${tempConvertida.toFixed(2)} °C`;
                break;
            default:
                throw new Error('Dirección de conversión no válida.');
        }
    } catch (error) {
        resultado.textContent = error.message;
    }
});
