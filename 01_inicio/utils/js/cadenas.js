/* let frase = "Esto es un ejemplo de string";
frase = frase.replaceAll(" ", "");
console.log(frase);
let vocales = 0,
  consonantes = 0;

for (let index = 0; index < frase.length; index++) {
  if (
    frase.charAt(index).toLowerCase() == "a" ||
    frase.charAt(index).toLowerCase() == "e" ||
    frase.charAt(index).toLowerCase() == "i" ||
    frase.charAt(index).toLowerCase() == "o" ||
    frase.charAt(index).toLowerCase() == "u"
  ) {
    vocales++;
  } else {
    consonantes++;
  }
}

alert(
  `El numero de vocales es ${vocales} y el de consonantes es ${consonantes}`
); */

// sacar por consola cada una de las letras que tiene la palabra
// sacar el número de vocales y consonantes por un alert

let frase = "Esto es un ejemplo de frase para analizar";
let estaLetra = frase.includes("E");
let subFrase = frase.slice(0, 5);
// se pida por pronpt un correo electronico
// se compruebe si está bien formateado:
// tiene un @
// en la segunda parte tiene un .
// tiene una extension com o es
// borja@gmail.com
// borja@borja@gmail.es
// borja@gmail.asd
// borja.martin@gmail.com
// console.log(subFrase);

/* let correo = prompt("Por favor introduce un correo electronico");
let numeroArrobas = 0;
let posicionArroba = 0;
for (let index = 0; index < correo.length; index++) {
  if (correo.charAt(index) == "@") {
    numeroArrobas++;
    posicionArroba = index;
  }
}

if (numeroArrobas == 1) {
  // borja@gmail.com
  let dominio = correo.slice(posicionArroba + 1, correo.length);
  console.log(dominio);
} */

// borja @ borja.com
//[borja,borja.com]
let correo = prompt("Por favor introduce un correo electronico");
let partesCorreo = correo.split("@"); // [borja,borja.com]
if (partesCorreo.length == 2) {
  let dominio = partesCorreo[1].split("."); // [borja,com]
  if (dominio.length == 2 && (dominio[1] == "es" || dominio[1] == "com")) {
    console.log("correo valido");
  } else {
    console.log("correo invalido");
  }
} else {
  console.log("correo invalido");
}
