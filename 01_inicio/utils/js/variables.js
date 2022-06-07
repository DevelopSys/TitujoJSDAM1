//console.log("Archivo de variables cargado");
// let --> ámbito global y de método
// var --> ámbito global --> NO UTILIZA
// const --> constantes

const DNI = "123456X"; // string
let nombre = "Borja"; // string
let nombreObj = new String("Elemento");
let apellido = undefined; // null --> undefined
let edad = 37; // number
let carnet = true; // boolean
let fecha = new Date(); // Date --> object
apellido = "Martin"; // string
//DNI = 12345667;

// comprobación de tipos
console.log(typeof nombre);
console.log(typeof nombreObj);
console.log(typeof apellido);
console.log(typeof edad);
console.log(typeof carnet);
console.log(typeof fecha);
console.log(typeof apellido);
console.log(isNaN(nombre));
console.log(isNaN(edad));

// salida por consola
// Mi nombre es XXX ZZZ y tengo CC años
console.log(
  "Mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años"
);
console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
