let parrafoRGB = document.querySelector("#rgb");
let parrafoColor = document.querySelector("#parrafo_color");
let colorR = document.querySelector("#r");
let colorG = document.querySelector("#g");
let colorB = document.querySelector("#b");
let valorR = colorR.value;
let valorG = colorG.value;
let valorB = colorB.value;

colorR.addEventListener("change", () => {
  actualizarColores();
});
colorG.addEventListener("change", () => {
  actualizarColores();
});
colorB.addEventListener("change", () => {
  actualizarColores();
});

function actualizarColores() {
  /*parrafoColor.setAttribute(
      "style",
      `background-color: rgb(${colorR.value},${colorG.value},${colorB.value})`
    );*/
  parrafoColor.style.backgroundColor(
    `rgb(${colorR.value},${colorG.value},${colorB.value})`
  );
  parrafoRGB.innerText = `El color es: rgb(${colorR.value},${colorG.value},${colorB.value})`;
}

console.log(valorR);
console.log(valorG);
console.log(valorB);
