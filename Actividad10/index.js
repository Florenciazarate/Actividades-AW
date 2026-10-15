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

for (let i= 1; i <= 10; i++) {
 console.log(i)
}

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`)
    } else {
        console.log(`El número ${i} es impar`)
    }
}