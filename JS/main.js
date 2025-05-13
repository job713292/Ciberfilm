let slider = document.getElementById("slider");
let boton_izquierda = document.getElementById("boton-izquierda");
let boton_derecha = document.getElementById("boton-derecha");


//Deplazamientio a la izquierda
boton_izquierda.addEventListener("click", function() {
    slider.scrollLeft -= 500;
});

//Deplazamiento a la derecha
boton_derecha.addEventListener("click", function() {
    slider.scrollLeft += 500;
});