// funciones declaradas
// funciones anonimas - funciones de flecha

// function nombre (parametros, parametros){
// cuerpo
// return dfghjk
//}
// nombre(1,2)

// let funcionAnonima = function (paramentros){}
// funcionAnonima(parametro)

// let flecha = (param1, param2) => { cuerpo }
// flecha(param1, param2)

function sumaNumeros(
  operadorUno,
  operadorDos,
  operandoCincuenta,
  operandoCuatro
) {
  let suma = operadorUno + operadorDos;
  console.log(suma);
}

function sumaDefecto(operandoUno, operandoDos = 0) {
  // arguments
  /* if (operandoDos == undefined) {
    operandoDos = 0;
  } */

  let suma = operandoUno + operandoDos;
  console.log(suma);
}

function functionSinParametros() {
  console.log("funcion llamada");
  // arguments
  for (let index = 0; index < arguments.length; index++) {
    console.log(arguments[index]);
  }
}

function funcionRetorno(op1, op2) {
  let suma = op1 + op2;
  console.log(suma);
  return suma;
}

//sumaNumeros(5, 10);
//sumaNumeros(10, 60, 67);
//sumaNumeros(10, 60, 67, 45);

/* sumaDefecto(1, 3);
sumaDefecto(7);
sumaDefecto(); */
// (...arg:)
// functionSinParametros(1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10);

// funcionRetorno((p1, p2) => {return p1+p2}, 5);

// con dos propmt pedidos al usuario
// realiza todas las operaciones matematicas y muestra
// un alert con el resultado
// con el menos numéro de lineas posibles

let operandoUno = Number(prompt("indica operando uno"));
let operandoDos = Number(prompt("indica operando dos"));

function operar(operandoUno, operandoDos) {
  alert(`Suma: ${operandoUno + operandoDos}
    Resta: ${operandoUno - operandoDos}
    Multi: ${operandoUno * operandoDos}
    Divi: ${operandoUno / operandoDos}`);
}

if (!isNaN(operandoUno) || !isNaN(operandoDos)) {
  //operar(operandoUno, operandoDos);
}
// con un propmnt pidiendo una frase
// con un prompt pidiendo una letra
// sacar un alert indicando si la letra esta en la frase
// de ser positivo el numero de veces que aparece
// con el menor numero de lineas posibles

let frase = prompt("Introduce una frase a analizar");
let letra = prompt("Introduce una letra a buscar");

function analizarLetra(fraseParam, letraParam) {
  let contador = 0;
  if (fraseParam.includes(letra)) {
    frase.split("").forEach((element) => {
      if (element == letraParam) {
        contador++;
      }
    });

    alert(`La letra ${letraParam} esta incluida y aparece ${contador}`);
  }
}

analizarLetra(frase, letra);
