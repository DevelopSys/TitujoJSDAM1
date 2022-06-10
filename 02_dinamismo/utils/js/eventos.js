let boton_agregar = document.querySelector("#boton_agregar");
let input_agregar = document.querySelector("#texto_li");
let contador = 0;
let spanPulsaciones = document.querySelector("span");

boton_agregar.addEventListener("click", (element) => {
  console.log(element);
});

input_agregar.addEventListener("keydown", (event) => {
  // sacar la tecla pulsada por consola
  // console.log(event.key);
  // console.log(input_agregar.value);
  contador++;
  spanPulsaciones.innerText = contador;
});

// el en parrafo que está configurado al final en el 0
// deberá aparecer el número de pulsaciones realizadas (dinámico)

// declarar la funcion fuera (va a ser reutilizada?)
// o dentro(solo ejecutada por el evento) --> anónima
