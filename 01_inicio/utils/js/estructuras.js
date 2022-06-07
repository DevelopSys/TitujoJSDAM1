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
  resultado > 0
    ? alert(`La ${operacion} entre ${numero1} y ${numero2} es ${resultado}`)
    : alert("resultado negativo");
} else {
  console.log("Alguno de los datos son incorrectos");
}

//let numeroTraducido = (Number)numero
isNaN(Number(numero1)) ? console.log("es un NAN") : console.log("es un numero");
