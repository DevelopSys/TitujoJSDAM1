let inputTweet = document.querySelector("input");
let textoPulsaciones = document.querySelector("#tamanio_texto");
let botonMandar = document.querySelector("button");
let divTweets = document.querySelector(".col-8 .row");

let contador = 0;
inputTweet.addEventListener("keyup", () => {
  // modificar el contenido de texto con un contador
  //contador++;
  textoPulsaciones.innerText = `${inputTweet.value.length}/255`;
});
botonMandar.addEventListener("click", () => {
  // capturar el input y meterlo en una card (que tendrá que estar en una col y en el div asociado)

  let contenido = inputTweet.value;
  if (contenido.length == 0 || contenido.length > 255) {
    alert("Tweet invalido, por favor revisalo");
  } else {
    contador++;
    // anadir una carta al divTweets
    divTweets.innerHTML = `${divTweets.innerHTML} <div class="col">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">Tweet ${contador}</h5>
                  <p class="card-text">
                    ${contenido}
                  </p>
                </div>
              </div>
            </div>`;
  }
  inputTweet.value = "";
  textoPulsaciones.innerText = `${inputTweet.value.length}/255`;
});
