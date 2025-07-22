let slider = document.getElementById("slider");
let boton_izquierda = document.getElementById("boton-izquierda");
let boton_derecha = document.getElementById("boton-derecha");


//Deplazamientio a la izquierda
boton_izquierda.addEventListener("click", function () {
  slider.scrollLeft -= 500;
});

//Deplazamiento a la derecha
boton_derecha.addEventListener("click", function () {
  slider.scrollLeft += 500;
});

let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  alert(`${nombre} agregado al carrito.`);
}

function mostrarCarrito() {
  let lista = document.getElementById('listaCarrito');
  let total = document.getElementById('total');
  let contenedor = document.getElementById('carrito');
  lista.innerHTML = '';
  let suma = 0;
  carrito.forEach(producto => {
    const item = document.createElement('li');
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    lista.appendChild(item);
    suma += producto.precio;
  });
  total.textContent = `Total: $${suma}`;
  contenedor.style.display = 'block';
}

//mostrar productos slider 

const productos = JSON.parse(localStorage.getItem("productos")) || [];
const contenedor = document.getElementById("slider");
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


// Menu responsive
const toggle = document.getElementById('menu-toggle');
const lista = document.querySelector('.lista');

toggle.addEventListener('click', () => {
  lista.classList.toggle('active');
});

