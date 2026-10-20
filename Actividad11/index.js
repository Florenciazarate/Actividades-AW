function saludar() {
    console.log("¡Hola, bienvenido!");
}

saludar();

function saludar() {
    console.log("¡Hola, bienvenido!");
}
 
saludar();
 

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
 
const resultadoEdad = esMayorDeEdad(20);
console.log(resultadoEdad);
 
const esMayorDeEdadFlecha = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};
 
const resultadoEdadFlecha = esMayorDeEdadFlecha(15);
console.log(resultadoEdadFlecha);

const compararNumeros = (numero1, numero2) => {
    if (numero1 < numero2) {
        console.log(`El número ${numero1} es menor que ${numero2}`);
    } else if (numero1 === numero2) {
        console.log(`El número ${numero1} es igual que ${numero2}`);
    } else {
        console.log(`El número ${numero1} es mayor que ${numero2}`);
    }
};
 
for (let i = 1; i <= 5; i++) {
    compararNumeros(i, 3);
}
 
 

const operacion = (numero1, numero2, callback) => {
    if (typeof numero1 !== "number" || typeof numero2 !== "number") {
        console.log("Debe ingresar solo números");
    } else {
        callback(numero1, numero2);
    }
};
 
const suma = (a, b) => {
    console.log(`El resultado de la suma es ${a + b}`);
};
 
const resta = (a, b) => {
    console.log(`El resultado de la resta es ${a - b}`);
};
 
operacion(8, 3, suma);
operacion(8, 3, resta);
operacion("ocho", 3, suma);
 