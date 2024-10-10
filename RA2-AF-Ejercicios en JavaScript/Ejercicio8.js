// Array para almacenar la lista de estudiantes
let listaEstudiantes = [];

// Función para agregar un estudiante a la lista
function agregarEstudiante(nombre, edad, notas) {
    const estudiante = {
        nombre: nombre,
        edad: edad,
        notas: notas.split(',').map(Number) // Convertir las notas de cadena a array de números
    };
    listaEstudiantes.push(estudiante);
}

// Función para mostrar todos los estudiantes
function mostrarEstudiantes() {
    const estudiantesDiv = document.getElementById("estudiantes");
    estudiantesDiv.innerHTML = ""; // Limpiar el contenido anterior

    if (listaEstudiantes.length === 0) {
        estudiantesDiv.innerHTML = "<p>No hay estudiantes registrados.</p>";
        return;
    }

    // Crear una lista de estudiantes y calcular sus promedios
    let listaHTML = "<h2>Lista de Estudiantes:</h2><ul>";
    for (const estudiante of listaEstudiantes) {
        let promedio = calcularMedia(estudiante.notas);
        listaHTML += `<li>Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Notas: ${estudiante.notas.join(", ")}, Promedio: ${promedio.toFixed(2)}</li>`;
    }
    listaHTML += "</ul>";

    estudiantesDiv.innerHTML = listaHTML;
}

// Función para calcular la media de las notas
function calcularMedia(notas) {
    let suma = 0;
    for (const nota of notas) {
        suma += nota;
    }
    return suma / notas.length;
}

// Event listener para agregar un estudiante al hacer clic en el botón
document.getElementById("agregarEstudianteBtn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const notas = document.getElementById("notas").value.trim();

    // Validar que se ingresen datos correctos
    if (nombre === "" || isNaN(edad) || notas === "") {
        alert("Por favor, complete todos los campos con datos válidos.");
        return;
    }

    // Agregar el estudiante a la lista
    agregarEstudiante(nombre, edad, notas);

    // Limpiar el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("notas").value = "";

    alert("Estudiante agregado correctamente.");
});

// Event listener para mostrar la lista de estudiantes al hacer clic en el botón
document.getElementById("mostrarEstudiantesBtn").addEventListener("click", mostrarEstudiantes);
