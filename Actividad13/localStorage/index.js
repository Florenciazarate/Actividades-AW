// 1. DOM - EVENTOS -------

// Referenciamos los elementos del html
const productosSeleccionados = document.getElementById('productos-seleccionados')
const botonAgregar = document.getElementById('boton-agregar')

// 2. PERSISTENCIA -------

// Recuperamos los productos guardados en localStorage.
// localStorage guarda texto: si hay algo guardado, lo convertimos
// en arreglo con JSON.parse. Si no hay nada (null), arrancamos vacío.
const productosGuardados = localStorage.getItem('productosEnCarro')
const productosEnCarro = productosGuardados ? JSON.parse(productosGuardados) : []

// Mostramos en el header la cantidad recuperada
productosSeleccionados.textContent = productosEnCarro.length

// Escuchador del botón
botonAgregar.addEventListener('click', (evento) => {
    // Cuerpo del callback (handler) del escuchador
    const idProducto = parseInt(botonAgregar.dataset.id)
    productosEnCarro.push(idProducto)
    productosSeleccionados.textContent = productosEnCarro.length

    // Guardamos el arreglo como texto con JSON.stringify
    localStorage.setItem('productosEnCarro', JSON.stringify(productosEnCarro))
})
