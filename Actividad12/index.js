// 1.a
// const numeros = [];

// for (let i = 1; i <= 5; i++) {
//   const dato = prompt(`Ingresá el número ${i}`);
//   numeros.push(Number(dato));
// }

// console.log(numeros);
// 1.b
// const numerosImpares = [];

// for (let i = 1; i <= 5; i++) {
//   const dato = prompt(`Ingresá el número ${i}`);
//   const numero = Number(dato);

//   if (numero % 2 !== 0) {
//     numerosImpares.push(numero);
//   }
// }

// console.log(numerosImpares);
// 1.c

// const frutas = ["pera", "manzana", "banana", "durazno"];

// frutas.forEach((fruta, indice) => {
//   frutas[indice] = fruta.toUpperCase();
// });

// console.log(frutas);

// 1.d
// const frutasmap = ["pera", "manzana", "banana", "durazno"];

// const frutasMayusculas = frutasmap.map((fruta) => {
//   return fruta.toUpperCase();
// });

// console.log(frutasMayusculas);
// console.log(frutasmap);
// 1.e
// const frutasfilter = ["pera", "manzana", "banana", "durazno"];

// const frutasConNa = frutasfilter.filter((fruta) => {
//   if (fruta.includes("na")) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(frutasConNa);
const producto = {
  nombre: "Remera de Goku",
  precio: 8500,
  stock: 12,
  talles: ["S", "M", "L"]
};

console.log(producto);

const productos = [
  {
    nombre: "Remera de Goku",
    precio: 8500,
    stock: 12,
    talles: ["S", "M", "L"]
  },
  {
    nombre: "Jean de Goku",
    precio: 25000,
    stock: 3,
    talles: ["S", "M", "L"]
  },
  {
    nombre: "Campera de Goku",
    precio: 48000,
    stock: 15,
    talles: ["S", "M", "L"]
  },
  {
    nombre: "Buzo de Goku",
    precio: 22000,
    stock: 4,
    talles: ["S", "M", "L"]
  }
];

productos.forEach((productoActual) => {
  if (productoActual.stock < 5) {
    console.log(productoActual);
  }
});

const productosConDescuento = productos.map((productoActual) => {
  return {
    nombre: productoActual.nombre,
    precio: productoActual.precio * 0.9,
    stock: productoActual.stock,
    talles: productoActual.talles
  };
});

console.log(productosConDescuento);

const productosStockAlto = productos.filter((productoActual) => {
  if (productoActual.stock > 10) {
    return true;
  } else {
    return false;
  }
});

console.log(productosStockAlto);