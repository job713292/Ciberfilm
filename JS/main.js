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