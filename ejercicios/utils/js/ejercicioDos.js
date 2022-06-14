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
  console.log(`rgb(${colorR.value},${colorG.value},${colorB.value})`);
}

console.log(valorR);
console.log(valorG);
console.log(valorB);
