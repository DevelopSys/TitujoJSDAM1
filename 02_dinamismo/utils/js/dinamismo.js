// HTMLElement --> individual (1) find()
// HTMLCollection<HTMLELements> --> conjunto (1 o más) findAll

// buscar elementos:

// tag
let equipos = ["barcelona", "madrid", "getafe", "sevilla", "atletico"];
let listas = document.getElementsByTagName("ul");
let elementosListas = document.getElementsByTagName("li");
// HTMLCOllection
console.log(listas);
elementosListas[0].innerText = "Modificacion de la propiedad";
/* for (let index = 0; index < elementosListas.length; index++) {
  console.log(elementosListas[index].innerText);
} */
//console.log(elementosListas[0].innerHTML);

setTimeout(() => {
  for (let index = 0; index < equipos.length; index++) {
    elementosListas[index].innerText = equipos[index];
  }
}, 5000);

// class
let asignaturasSegundo = document.getElementsByClassName("list-group-item");
// HTMLCOllection
console.log(asignaturasSegundo);

// id

let boton = document.getElementById("boton_agregar");
// HTMLElement (el primero encontrado)
console.log(boton);

// hacer un array de 5 palabras
// modificar cada uno de los textos que ponen en el li de las asginaturas de primero
