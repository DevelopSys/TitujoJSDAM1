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
  /* if (operandoDos == undefined) {
    operandoDos = 0;
  } */

  let suma = operandoUno + operandoDos;
  console.log(suma);
}

//sumaNumeros(5, 10);
//sumaNumeros(10, 60, 67);
//sumaNumeros(10, 60, 67, 45);

sumaDefecto(1, 3);
sumaDefecto(7);
