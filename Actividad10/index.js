// console.log('Hola') //imprime por consola

//Tipado
// const nombre = 'Colapinto' //este nombre es constante por eso da error
// nombre = 'Goku'
// console.log(nombre)

// let nombre = 'Colapinto'
// nombre = 'Goku'
// nombre = '2'
// console.log(nombre)
// console.log(typeof nombre)

// let esMayorDeEdad = true

// Operadores
// Aritmeticos

let edad =18;
const mayoriaDeEdad = 18

let esMayorDeEdad = edad >= mayoriaDeEdad
console.log(esMayorDeEdad)

if(edad >= mayoriaDeEdad){
    console.log('Es mayor')
}
else{
    console.log('Es menor')
}


let numero = 2;

if ((numero % 2) === 0) {
    console.log('par')
}
else {
    console.log('impar')
}

let nota= 10;

if (nota < 4 ) {
    console.log ('Reprobado')
}
else if (nota <= 7 && nota >=4  ){
    console.log ('Aprobado')
}
else if (nota > 7) {
    console.log ('Excelente')
}

