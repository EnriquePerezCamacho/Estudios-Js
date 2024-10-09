const carrito = [];

function agregarProducto() {
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!nombre || isNaN(precio) || isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, completa todos los campos correctamente.');
        return;
    }

    let productoExistente = carrito.find(item => item.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, cantidad });
    }

    mostrarCarrito();
    limpiarCampos();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        const item = carrito[i];
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        const li = document.createElement('li');
        li.textContent = `${item.nombre} - Precio: $${item.precio.toFixed(2)} x Cantidad: ${item.cantidad} = $${subtotal.toFixed(2)}`;
        listaCarrito.appendChild(li);
    }

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

function limpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = '';
}
