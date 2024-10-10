// Array que almacenará los productos agregados al carrito
const carrito = [];

// Función que se ejecuta al presionar el botón para agregar un producto
function agregarProducto() {
    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById('nombre').value;  // Nombre del producto
    const precio = parseFloat(document.getElementById('precio').value);  // Precio del producto convertido a número decimal
    const cantidad = parseInt(document.getElementById('cantidad').value);  // Cantidad del producto convertida a número entero

    // Validar que todos los campos tengan valores correctos y no estén vacíos
    if (!nombre || isNaN(precio) || isNaN(cantidad) || cantidad <= 0) {
        // Mostrar un mensaje de alerta si alguno de los campos es incorrecto
        alert('Por favor, completa todos los campos correctamente.');
        return;  // Detener la ejecución de la función si la validación falla
    }

    // Buscar si el producto ya existe en el carrito por su nombre
    let productoExistente = carrito.find(item => item.nombre === nombre);
    
    // Si el producto ya está en el carrito, se actualiza la cantidad
    if (productoExistente) {
        productoExistente.cantidad += cantidad;  // Incrementar la cantidad del producto existente
    } else {
        // Si el producto no existe, se agrega al array `carrito` con sus propiedades
        carrito.push({ nombre, precio, cantidad });
    }

    // Actualizar la visualización del carrito
    mostrarCarrito();

    // Limpiar los campos de entrada del formulario después de agregar el producto
    limpiarCampos();
}

// Función para mostrar el contenido del carrito en la lista del HTML
function mostrarCarrito() {
    // Obtener el elemento <ul> donde se listarán los productos del carrito
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';  // Limpiar la lista antes de agregar nuevos elementos

    // Variable para calcular el total de la compra
    let total = 0;

    // Recorrer cada producto en el carrito para mostrarlo
    for (let i = 0; i < carrito.length; i++) {
        const item = carrito[i];  // Obtener el producto actual
        const subtotal = item.precio * item.cantidad;  // Calcular el subtotal (precio x cantidad)
        total += subtotal;  // Sumar el subtotal al total general

        // Crear un elemento de lista (<li>) para mostrar el producto
        const li = document.createElement('li');
        // Añadir el texto con el nombre del producto, precio, cantidad y subtotal
        li.textContent = `${item.nombre} - Precio: $${item.precio.toFixed(2)} x Cantidad: ${item.cantidad} = $${subtotal.toFixed(2)}`;
        
        // Agregar el elemento <li> a la lista <ul>
        listaCarrito.appendChild(li);
    }

    // Mostrar el total en el elemento <p id="total">
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Función para limpiar los campos del formulario después de agregar un producto
function limpiarCampos() {
    // Limpiar los valores de los campos de entrada
    document.getElementById('nombre').value = '';  // Vaciar el campo de nombre
    document.getElementById('precio').value = '';  // Vaciar el campo de precio
    document.getElementById('cantidad').value = '';  // Vaciar el campo de cantidad
}
