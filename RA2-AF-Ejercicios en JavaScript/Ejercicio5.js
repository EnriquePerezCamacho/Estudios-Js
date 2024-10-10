// Selecciona el botón con el ID "calcular" y añade un evento "click" que se ejecuta cuando el usuario presiona el botón
document.getElementById('calcular').addEventListener('click', function() {
    
    // Obtiene el valor del campo de texto con ID "numeros" y lo almacena en la variable `input`
    const input = document.getElementById('numeros').value;
    
    // Convierte la cadena de texto en un array de números:
    // 1. `input.split(',')` separa la cadena por comas, creando un array con cada número como elemento en forma de cadena.
    // 2. `map(Number)` convierte cada elemento de cadena en un número.
    // 3. `filter(num => !isNaN(num))` elimina cualquier elemento que no sea un número válido (por ejemplo, si el usuario ingresa letras por error).
    const numeros = input.split(',').map(Number).filter(num => !isNaN(num));

    // Llama a la función `calcularPromedio` pasando el array `numeros` y almacena el resultado en `promedio`
    const promedio = calcularPromedio(numeros);
    
    // Llama a la función `calcularMediana` pasando el array `numeros` y almacena el resultado en `mediana`
    const mediana = calcularMediana(numeros);

    // Muestra el resultado del promedio en el párrafo con ID "resultado-promedio"
    document.getElementById('resultado-promedio').textContent = `Promedio: ${promedio}`;
    
    // Muestra el resultado de la mediana en el párrafo con ID "resultado-mediana"
    document.getElementById('resultado-mediana').textContent = `Mediana: ${mediana}`;
});

// Función para calcular el promedio de un array de números
function calcularPromedio(array) {
    // Si el array está vacío, devuelve 0 como resultado
    if (array.length === 0) return 0;
    
    // Suma todos los elementos del array usando `reduce`
    // `acc` es el acumulador y `val` es el valor actual que se suma a `acc`
    const suma = array.reduce((acc, val) => acc + val, 0);
    
    // Devuelve el promedio, que es la suma total dividida entre el número de elementos en el array
    return suma / array.length;
}

// Función para calcular la mediana de un array de números
function calcularMediana(array) {
    // Si el array está vacío, devuelve 0 como resultado
    if (array.length === 0) return 0;
    
    // Ordena el array en orden ascendente (de menor a mayor) usando la función `sort`
    // `a - b` asegura un orden numérico correcto
    const sortedArray = array.sort((a, b) => a - b);
    
    // Encuentra la posición media del array
    const medio = Math.floor(sortedArray.length / 2);
    
    // Si el array tiene un número par de elementos, calcula la mediana como el promedio de los dos valores centrales
    if (sortedArray.length % 2 === 0) {
        return (sortedArray[medio - 1] + sortedArray[medio]) / 2;
    } else {
        // Si el array tiene un número impar de elementos, la mediana es el valor central
        return sortedArray[medio];
    }
}
