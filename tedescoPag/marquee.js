const contenedor = document.querySelector(".textoMoviendose");

// Creamos un wrapper interno que es el que se va a mover
const wrapper = document.createElement("div");
wrapper.style.display = "flex";
wrapper.style.whiteSpace = "nowrap";

// Movemos los h1 que ya están en el HTML adentro del wrapper
const itemsOriginales = Array.from(contenedor.querySelectorAll("h1"));
itemsOriginales.forEach(function(item) {
    wrapper.appendChild(item);
});

// Duplicamos los h1 para que el loop sea continuo sin corte
itemsOriginales.forEach(function(item) {
    const copia = item.cloneNode(true);
    wrapper.appendChild(copia);
});

// Estilos para cada h1
wrapper.querySelectorAll("h1").forEach(function(item) {
    item.style.flexShrink = "0";
    item.style.paddingRight = "40px";
});

// El contenedor solo hace de "ventana"
contenedor.style.overflow = "hidden";
contenedor.style.width = "100%";
contenedor.style.display = "block";

contenedor.appendChild(wrapper);

// Posición actual
let posicion = 0;
const velocidad = 0.6;

function mover() {
    posicion -= velocidad;

    // La mitad del wrapper = el ancho de los originales
    const mitad = wrapper.scrollWidth / 2;

    // Cuando se fue la mitad, reseteamos sin que se note
    if (Math.abs(posicion) >= mitad) {
        posicion = 0;
    }

    wrapper.style.transform = "translateX(" + posicion + "px)";
    requestAnimationFrame(mover);
}

mover();


mover();
