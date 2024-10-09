document.getElementById('generar').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);
    const primos = generarPrimos(numero);
    document.getElementById('resultado').textContent = `Números primos menores o iguales a ${numero}: ${primos.join(', ')}`;
});

function generarPrimos(max) {
    const primos = [];
    for (let num = 2; num <= max; num++) {
        if (isPrime(num)) {
            primos.push(num);
        }
    }
    return primos;
}

function isPrime(num) {
    if (num < 2) return false; // Los números menores que 2 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si es divisible por cualquier número entre 2 y la raíz cuadrada de num
    }
    return true; // Si no es divisible por ninguno, es primo
}
