// carritoVista.js
document.addEventListener("DOMContentLoaded", () => {
  const contenedorCarrito = document.getElementById("contenedorCarrito");
  if (!contenedorCarrito) return; // Solo funciona en carrito.html

  mostrarCarrito();

  function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
      contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
      return;
    }

    carrito.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("producto-1");

      div.innerHTML = `
        <div class="p-s"><img src="${item.imagen}" alt="${item.nombre}" width="80"></div>
        <h1>${item.nombre}</h1>
        <p>Precio: $${item.precio}</p>
        <p>Cantidad: ${item.cantidad}</p>
        <div class="p-s-1">
        <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        </div>
      `;

      contenedorCarrito.appendChild(div);
    });

    // Mostrar total
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const totalDiv = document.createElement("div");
    totalDiv.classList.add("total-carrito");
    totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
    contenedorCarrito.appendChild(totalDiv);
  }

  window.mostrarCarrito = mostrarCarrito; // Hacerla global
});