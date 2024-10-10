// Añade un evento 'click' al botón con ID 'jugar'.
document.getElementById('jugar').addEventListener('click', function() {
    // Opciones disponibles para el juego.
    const opciones = ['piedra', 'papel', 'tijeras'];
    
    // Solicita al usuario que elija entre piedra, papel o tijeras y convierte la entrada a minúsculas.
    const jugadaUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();

    // Verifica si la entrada del usuario es válida.
    if (!opciones.includes(jugadaUsuario)) {
        // Si la entrada no es válida, muestra un mensaje de alerta y termina la función.
        alert("Entrada no válida. Por favor elige piedra, papel o tijeras.");
        return;
    }

    // Genera una jugada aleatoria para la computadora seleccionando una opción del array.
    const jugadaComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    // Llama a la función determinarGanador para obtener el resultado del juego.
    const resultado = determinarGanador(jugadaUsuario, jugadaComputadora);

    // Muestra el resultado en el elemento con ID 'resultado'.
    document.getElementById('resultado').textContent = `Tu elección: ${jugadaUsuario} | Elección de la computadora: ${jugadaComputadora} | Resultado: ${resultado}`;
});

// Función que determina el ganador basándose en las jugadas del usuario y de la computadora.
function determinarGanador(usuario, computadora) {
    // Utiliza un switch para comparar la jugada del usuario con la de la computadora.
    switch (usuario) {
        case 'piedra':
            // Si el usuario eligió piedra, verifica lo que eligió la computadora.
            if (computadora === 'tijeras') return 'Ganaste!'; // Piedra vence a tijeras.
            else if (computadora === 'papel') return 'Perdiste!'; // Papel vence a piedra.
            else return 'Es un empate!'; // Ambas jugadas son piedra.

        case 'papel':
            // Si el usuario eligió papel, verifica lo que eligió la computadora.
            if (computadora === 'piedra') return 'Ganaste!'; // Papel vence a piedra.
            else if (computadora === 'tijeras') return 'Perdiste!'; // Tijeras vence a papel.
            else return 'Es un empate!'; // Ambas jugadas son papel.

        case 'tijeras':
            // Si el usuario eligió tijeras, verifica lo que eligió la computadora.
            if (computadora === 'papel') return 'Ganaste!'; // Tijeras vence a papel.
            else if (computadora === 'piedra') return 'Perdiste!'; // Piedra vence a tijeras.
            else return 'Es un empate!'; // Ambas jugadas son tijeras.

        default:
            // Esta línea nunca debería alcanzarse debido a la validación anterior.
            return 'Opción no válida';
    }
}
