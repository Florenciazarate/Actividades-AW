// Actividad 13 - DOM, eventos y persistencia

// 1. DOM - EVENTOS --------------------------

// Referencias a los elementos del HTML
const boton = document.querySelector("main button");
const contador = document.querySelector("header nav span");

// 2. PERSISTENCIA --------------------------

// Clave con la que se guarda la cantidad en localStorage
const CLAVE = "cantidadArticulos";

// Lee la cantidad guardada. localStorage guarda texto, por eso se
// convierte a número. Si no hay nada guardado (null), devuelve 0.
function leerCantidadGuardada() {
  const guardado = localStorage.getItem(CLAVE);
  return guardado ? Number(guardado) : 0;
}

// Guarda la cantidad en localStorage
function guardarCantidad(cantidad) {
  localStorage.setItem(CLAVE, cantidad);
}

// Muestra la cantidad en el header
function mostrarCantidad(cantidad) {
  contador.textContent = cantidad;
}

// Estado inicial: se recupera lo guardado al cargar la página
let cantidadArticulos = leerCantidadGuardada();
mostrarCantidad(cantidadArticulos);

// Cada clic suma un artículo, actualiza el header y lo guarda
boton.addEventListener("click", () => {
  cantidadArticulos++;
  mostrarCantidad(cantidadArticulos);
  guardarCantidad(cantidadArticulos);
});
