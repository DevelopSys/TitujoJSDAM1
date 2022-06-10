// NodeList

// buscar una cosa find(). Captura el primer nodo --> Node
// tag
let botonAgregar = document.querySelector("button");
// class
let elementosSegundo = document.querySelector(".list-group-item");
// id
let listaPrimeros = document.querySelector("#lista_primeros");

// buscar muchas cosas findAll()

// class
elementosSegundo = document.querySelectorAll(".list-group-item");
elementosSegundo.forEach((element) => {
  console.log(element);
});

// elemento#id
// elemento.class
// elemento#id li
// elemento#id li[propiedad="valor"]
// elemento#id li[propiedad="valor"]::pseudoclase
let elementosPrimero = document.querySelectorAll("ul.lista_primeros li");
console.log(elementosPrimero);

// id
let boton = document.querySelectorAll("#boton_agregar");

// tag
let lisas = document.querySelectorAll("ul");
