let baraja = [];

function iniciarBaraja() {
  let palos = ["T", "C", "D", "P"];

  for (let index = 0; index < palos.length; index++) {
    for (let index2 = 1; index2 < 14; index2++) {
      if (index2 == 11) {
        baraja.push("J" + palos[index]);
      } else if (index2 == 12) {
        baraja.push("Q" + palos[index]);
      } else if (index2 == 13) {
        baraja.push("K" + palos[index]);
      } else {
        baraja.push(index2 + palos[index]);
      }
    }
  }
}

function mostrarBaraja() {
  console.log(baraja);
}

iniciarBaraja();
baraja = _.shuffle(baraja);
mostrarBaraja();
