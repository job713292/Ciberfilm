const productos = JSON.parse(localStorage.getItem("productos")) || [];
const contenedor = document.getElementById("Producto");
const mostrarEliminar = window.location.pathname.includes("agregarProductos.html");
const mostrarAgregar = !mostrarEliminar;

if (productos.length === 0) {
    contenedor.innerHTML = "<p>No hay productos guardados.</p>";
} else {
    productos.forEach((producto, index) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("producto-1");

        tarjeta.innerHTML = `
  <div class="p-s">
    <img src="${producto.imagen}" alt="${producto.nombre}">
  </div>
  <h1>${producto.nombre}</h1>
  <p>$${producto.precio}</p>
  <div class="p-s-1">
    ${mostrarAgregar ? `<button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">AGREGAR</button>` : ""}
    ${mostrarEliminar ? `<button onclick="eliminarProducto(${index})">ELIMINAR</button>` : ""}
  </div>
`;
        contenedor.appendChild(tarjeta);
    });
}

function agregarAlCarrito(nombre, precio) {
    alert(`Producto agregado: ${nombre} ($${precio})`);
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    location.reload(); // Recarga para reflejar los cambios
}