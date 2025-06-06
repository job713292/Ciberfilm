const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const imagen = document.getElementById("imagen");
const formulario = document.getElementById("nuevoProducto");


formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener productos ya guardados
    let productos = JSON.parse(localStorage.getItem("productos")) || [];

    // Crear nuevo producto
    const nuevoProducto = {
        nombre: nombre.value,
        precio: precio.value,
        imagen: imagen.value
    };

    // Agregarlo al array y guardarlo
    productos.push(nuevoProducto);
    localStorage.setItem("productos", JSON.stringify(productos));

    // Limpiar campos
    nombre.value = "";
    precio.value = "";
    imagen.value = "";

    location.reload();
});

