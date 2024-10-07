// Función para simular el lanzamiento de un dado
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1; // Genera un número aleatorio entre 1 y 6
}

// Función para simular 100 lanzamientos de dos dados y contar cuántas veces suman 7
function contarSiete() {
    let contadorSiete = 0;

    // Realizar 100 simulaciones de lanzamiento de dos dados
    for (let i = 0; i < 100; i++) {
        let dado1 = lanzarDado();
        let dado2 = lanzarDado();

        // Si la suma de los dos dados es 7, incrementar el contador
        if (dado1 + dado2 === 7) {
            contadorSiete++;
        }
    }

    return contadorSiete; // Retornar el número de veces que se obtiene un 7
}

// Añadir un evento al botón para ejecutar la simulación al hacer clic
document.getElementById("simularBtn").addEventListener("click", function() {
    const resultado = contarSiete();
    document.getElementById("resultado").innerText = "Número de veces que la suma es 7: " + resultado;
});
