const estudiantes = [];

document.getElementById('agregar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const notas = document.getElementById('notas').value.split(',').map(Number);

    if (nombre && !isNaN(edad) && notas.every(num => !isNaN(num))) {
        const estudiante = {
            nombre: nombre,
            edad: edad,
            notas: notas
        };
        estudiantes.push(estudiante);
        alert('Estudiante agregado con éxito');
        limpiarCampos();
    } else {
        alert('Por favor, completa todos los campos correctamente.');
    }
});

document.getElementById('mostrar').addEventListener('click', function() {
    const lista = document.getElementById('lista-estudiantes');
    lista.innerHTML = ''; // Limpiar la lista anterior

    for (const estudiante of estudiantes) {
        const media = calcularMedia(estudiante.notas);
        const li = document.createElement('li');
        li.textContent = `${estudiante.nombre}, Edad: ${estudiante.edad}, Notas: ${estudiante.notas.join(', ')}, Media: ${media}`;
        lista.appendChild(li);
    }
});

function calcularMedia(notas) {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return (suma / notas.length).toFixed(2);
}

function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('notas').value = '';
}
