document.getElementById('calcular').addEventListener('click', function() {
    const input = document.getElementById('numeros').value;
    const numeros = input.split(',').map(Number).filter(num => !isNaN(num));

    const promedio = calcularPromedio(numeros);
    const mediana = calcularMediana(numeros);

    document.getElementById('resultado-promedio').textContent = `Promedio: ${promedio}`;
    document.getElementById('resultado-mediana').textContent = `Mediana: ${mediana}`;
});

function calcularPromedio(array) {
    if (array.length === 0) return 0;
    const suma = array.reduce((acc, val) => acc + val, 0);
    return suma / array.length;
}

function calcularMediana(array) {
    if (array.length === 0) return 0;
    const sortedArray = array.sort((a, b) => a - b);
    const medio = Math.floor(sortedArray.length / 2);
    
    if (sortedArray.length % 2 === 0) {
        return (sortedArray[medio - 1] + sortedArray[medio]) / 2;
    } else {
        return sortedArray[medio];
    }
}
