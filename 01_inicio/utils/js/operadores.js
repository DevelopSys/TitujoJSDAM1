// aritmeticos
let numero1 = 6;
let numero2 = 10;
//let suma = numero1 + numero2;
//console.log(suma);
console.log(numero1 + numero2);
// la suma de los numeros es 16

let suma = numero1 + numero2;
suma += 10;
let resta = numero1 - numero2;
resta -= 10;
let multiplicacion = numero1 * numero2;
multiplicacion *= 2;
let division = numero1 / numero2;
division /= 2;
let modulo = numero1 % numero2;

console.log(`La suma de los numeros es ${suma}`);
console.log(`La multiplicación de los numeros es ${multiplicacion}`);
console.log(`La resta de los numeros es ${resta}`);
console.log(`La división de los numeros es ${division}`);
console.log(`El módulo de los numeros es ${modulo}`);
console.log(`El tipo del resto es ${typeof (numero1 % numero2)}`);

// operadores comparacion

numero1 = 11;
numero2 = 10;

let mayorQue = numero1 > numero2;
console.log(mayorQue);
let mayorIgual = numero1 >= numero2;
console.log(mayorIgual);
let menorQue = numero1 < numero2;
console.log(menorQue);
let menorIgual = numero1 <= numero2;
console.log(menorIgual);

let diferente = numero1 != numero2;
console.log(diferente);
console.log("igual");
numero1 = 4;
numero2 = "4";
let igual = numero1 === numero2;
console.log(igual);

//alert(`Bienvendido ${nombre}`);
//let confirmacion = confirm("¿Seguro que quieres continuar?");
//console.log(confirmacion);
alert(`Bienvendido ${nombre}`);
let introduccion = prompt(
  `Por favor ${nombre} introduce un dato a trabajar`,
  "paramentro por defecto"
);
console.log(introduccion);
/*

Realizar un script que te pida nombre y apellidos
una vez introducidos se pedirán dos numeros a operar (cada uno en un prompt). 
En el mensaje aparecerán los nombres y apellidos introducidos

una vez introducidos los datos se preguntará si se quiere realizar la operacion
en el caso de decir que si aparecerá un mensaje con todas las operaciones y sus resultados

Las operaciones entre X y Y son:
multiplicacion: asdads
division: asdads
suma: asdads
resta: asdads
modulo: asdads
*/

nombre = prompt("Por favor introduce tu nombre");
apellido = prompt("Por favor introduce tu apellido");
numero1 = prompt(
  `Bienvenido  ${nombre} ${apellido} introduce el primer operando`
);
numero2 = prompt(`Introduce el segundo operando`);
confirmacion = confirm("Estas seguro que quieres continuar");
if (confirmacion) {
  suma = Number(numero1) + Number(numero2);
  resta = numero1 - numero2;
  multiplicacion = numero1 * numero2;
  division = numero1 / numero2;
  modulo = numero1 % numero2;
  alert(`El resultado de las operaciones entre ${numero1} y ${numero2} es:
    \nMultiplicación: ${multiplicacion}
    \nDivision: ${division}
    \nResta: ${resta}
    \nSuma: ${suma}
    `);
} else {
  alert(`${nombre} hasta la proxima`);
}
