// Añade un evento 'click' al botón con ID 'generar'.
document.getElementById('generar').addEventListener('click', function() {
    // Obtiene el valor ingresado por el usuario y lo convierte a un número entero.
    const numero = parseInt(document.getElementById('numero').value);
    
    // Llama a la función generarPrimos para obtener los números primos hasta el número ingresado.
    const primos = generarPrimos(numero);
    
    // Muestra los números primos en el elemento 'resultado'.
    document.getElementById('resultado').textContent = `Números primos menores o iguales a ${numero}: ${primos.join(', ')}`;
});

// Función que genera números primos hasta un número máximo dado.
function generarPrimos(max) {
    // Crea un array para almacenar los números primos.
    const primos = [];
    
    // Recorre los números desde 2 hasta el número máximo dado.
    for (let num = 2; num <= max; num++) {
        // Verifica si el número actual es primo.
        if (isPrime(num)) {
            // Si es primo, lo agrega al array de primos.
            primos.push(num);
        }
    }
    
    // Devuelve el array de números primos.
    return primos;
}

// Función que verifica si un número es primo.
function isPrime(num) {
    // Los números menores que 2 no son primos.
    if (num < 2) return false; 

    // Verifica divisibilidad de num desde 2 hasta la raíz cuadrada de num.
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Si num es divisible por i, no es primo.
        if (num % i === 0) return false; 
    }

    // Si no es divisible por ningún número, es primo.
    return true; 
}
