let boton_agregar = document.querySelector("#boton_agregar");
let input_agregar = document.querySelector("#texto_li");

boton_agregar.addEventListener("click", (element) => {
  console.log(element);
});

input_agregar.addEventListener("keydown", () => {
  // sacar la tecla pulsada por consola
});

// declarar la funcion fuera (va a ser reutilizada?)
// o dentro(solo ejecutada por el evento) --> anónima
