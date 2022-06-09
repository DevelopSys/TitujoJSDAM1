let elementos = [1, 23, 4, 5, 6, 7, 8, 8]; // number
let equipos = ["madrid", "barsa", "sevilla", "atletico", "getafe"]; //string
let cosas = [1, 3, 4, 5, 6, "madrid", true]; // any

// acceder posicions

/* console.log(equipos[0]);
equipos[0] = "leganes";
console.log(equipos);
console.log(equipos.length);
equipos[5] = "alcorcon";
console.log(equipos);
equipos[equipos.length] = "cadiz";
equipos[10] = "fuera de lista";
console.log(equipos); */

// trabajar con el final
/* console.log(equipos.push("leganes", "alcorcon", "cadiz"));
console.log(equipos);
console.log(equipos.pop());
console.log(equipos); */

// trabajar con el principio
/* console.log(equipos.unshift("leganes", "alcorcon", "cadiz"));
console.log(equipos);
console.log(equipos.shift());
console.log(equipos); */

// trabajar con cualquier posicion
// borrar un elemento
// foreach --> if busco el elemento
// filter --> filtrar por x condiciones
/* 
equipos = ["madrid", "barsa", "sevilla", "atletico", "getafe"];
equipos = equipos.filter((item) => {
  return item != "sevilla" && item.length == 5;
});
console.log(equipos); */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let posicion = 0;
while (posicion < numeros.length) {
  console.log(numeros[posicion]);
  posicion++;
}

for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index]);
}

numeros.forEach((element) => {
  console.log(element);
});

numeros.forEach((element) => {
  console.log(element + 1);
});
let suma = 0;
numeros.forEach((element) => {
  suma += element;
});
console.log("La media de los elementos es: " + suma / numeros.length);

let arrayAleatorios = [];

for (let index = 0; index < 20; index++) {
  arrayAleatorios[index] = Math.random() * 20;
}

_.shuffle(arrayAleatorios);

arrayAleatorios.forEach((element) => {
  console.log(element);
});

_.shuffle(arrayAleatorios);

arrayAleatorios.forEach((element) => {
  console.log(element);
});
