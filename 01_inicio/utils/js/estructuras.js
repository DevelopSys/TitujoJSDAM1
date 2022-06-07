// if if else switch while do while for foreach (especial) for of for on break goto

// if if else
let acierto = true;

/*if (acierto) {
  console.log("acierto verdadero");
}*/
/* if (acierto) {
  console.log("La respuesta es true");
} else if () {
     
} else if () {
    
} else {
    
} */

/* let nota = 4;
if (nota >= 5) {
  console.log("El examen está aprobado");
} else {
  console.log("El examen no está aprobado");
} */

// if ternario
// condicion ? true : false

// acierto ? console.log("examen aprobado") : console.log("examen suspenso");
// if else
// if else if else

// if
// acierto & console.log("examen aprobado");

let nota = 3;
switch (nota) {
  case 1:
    console.log("dato introducido 1");
    break;
  case 2:
    console.log("dato introducido 2");
    break;
  case 3:
    console.log("dato introducido 3");
    break;
  default:
    console.log("dato incorrecto");
    break;
}

/*
Pedir por prompt dos numeros
Pedir por prompt una operacions (suma, resta, division, multiplicacion)

- si se introduce números menores que 0 o letras que salte una alerta 
indicando el error y el programa parará
- Si los numeros introducidos son validos se realizará la operacion indicada

- si se detecta que la operaciones es negativa el programa parará 
tras realizar todas las operaciones de los números y saltará una alerta
indicando de ello
*/
/* 
let numero1 = prompt("Introduce operador uno");
let numero2 = prompt("Introduce operador dos");

if (
  !isNaN(Number(numero1)) &&
  !isNaN(Number(numero2)) &&
  numero1 > 0 &&
  numero2 > 0
) {
  let operacion = prompt("Introduce la operacion a realizar");
  let resultado;
  switch (operacion) {
    case "suma":
      resultado = numero1 + numero2;
      break;
    case "resta":
      resultado = numero1 - numero2;

      break;
    case "multiplicacion":
      resultado = numero1 * numero2;
      break;
    case "division":
      resultado = numero1 / numero2;
      break;
    default:
      console.log("operacion desconocida");
      break;
  }
  resultado >= 0
    ? alert(`La ${operacion} entre ${numero1} y ${numero2} es ${resultado}`)
    : alert("resultado negativo");
} else {
  console.log("Alguno de los datos son incorrectos");
}

//let numeroTraducido = (Number)numero
isNaN(Number(numero1)) ? console.log("es un NAN") : console.log("es un numero");
 */

/*
Pedir un número por Prompt y mostrar por consola todos 
los números desde el introducido hasta 0. 
En el caso de ser un número negativo saltará una alerta
9

Siempre hay que comprobar si es un número lo introducido

Pedir por consola dos numeros y sacar consola todos 
los numeros entre ellos
6 10*/

/* let numeroIntroducido = prompt("introduce numero");

if (!isNaN(Number(numeroIntroducido)) && numeroIntroducido > 0) {
  while (numeroIntroducido > 0) {
    console.log(numeroIntroducido);
    numeroIntroducido--;
  }
} else {
  console.log("numero incorrecto");
}

let numeroUno = prompt("introduce numero");
let numeroDos = prompt("introduce numero");

let max, min;
if (numeroDos > numeroUno) {
  max = numeroDos;
  min = numeroUno;
} else if (numeroDos < numeroUno) {
  max = numeroUno;
  min = numeroDos;
} else {
  alert("los numeros son iguales");
}

while (max > min) {
  console.log(max);
  max--;
}
 */

// for -- repeticiones sobre estrucutar --> array
let numeros = [1, 2, 3, 45, 6, 7, 67, 8, 6]; // number
/* console.log(numeros[0]);
console.log(numeros.length);

for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index]);
} */

//let posicion = 0;
numeros.forEach((element, indice) => {
  if (indice % 2 != 0) {
    console.log(element);
  }
  //posicion++;
  // solo quiero sacar los que en estan en posiciones pares
});
