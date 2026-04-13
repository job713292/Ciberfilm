function agregarAlCarrito(id) {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let producto = productos.find(p => p.id === id);
    if (!producto) return;

    // Evitar duplicados sumando cantidad
    let existe = carrito.find(p => p.id === id);
    if (existe) {
        existe.cantidad = (existe.cantidad || 1) + 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.nombre} se agregó al carrito`);
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito = carrito.filter(item => item.id !== id);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Actualizar vista si existe
  if (typeof mostrarCarrito === "function") mostrarCarrito();
}


//enviar pedido whatsapp

function enviarCarritoWhatsApp() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  // Crear mensaje
  let mensaje = "¡Hola! Quiero realizar el siguiente pedido:\n\n";
  let total = 0;

  carrito.forEach((item, index) => {
    mensaje += `${index + 1}. ${item.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.precio}\n`;
    total += item.precio * item.cantidad;
  });

  mensaje += `\nTotal: $${total}`;

  // Codificar mensaje para URL
  const numero = "573236992561"; // <-- Cambia por tu número de WhatsApp con código de país
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  // Abrir WhatsApp
  window.open(url, "_blank");
}