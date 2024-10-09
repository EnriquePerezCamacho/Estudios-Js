document.getElementById('jugar').addEventListener('click', function() {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const jugadaUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();

    if (!opciones.includes(jugadaUsuario)) {
        alert("Entrada no válida. Por favor elige piedra, papel o tijeras.");
        return;
    }

    const jugadaComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    const resultado = determinarGanador(jugadaUsuario, jugadaComputadora);

    document.getElementById('resultado').textContent = `Tu elección: ${jugadaUsuario} | Elección de la computadora: ${jugadaComputadora} | Resultado: ${resultado}`;
});

function determinarGanador(usuario, computadora) {
    switch (usuario) {
        case 'piedra':
            if (computadora === 'tijeras') return 'Ganaste!';
            else if (computadora === 'papel') return 'Perdiste!';
            else return 'Es un empate!';
        case 'papel':
            if (computadora === 'piedra') return 'Ganaste!';
            else if (computadora === 'tijeras') return 'Perdiste!';
            else return 'Es un empate!';
        case 'tijeras':
            if (computadora === 'papel') return 'Ganaste!';
            else if (computadora === 'piedra') return 'Perdiste!';
            else return 'Es un empate!';
        default:
            return 'Opción no válida'; // No debería llegar aquí debido a la validación anterior
    }
}
