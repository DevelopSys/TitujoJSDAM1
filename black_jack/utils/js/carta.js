class carta {
  valor;
  ruta;

  constructor(ruta, valor) {
    this.valor = valor;
    this.ruta = `./utils/images/${ruta}.png`;
  }

  get getValor() {
    return this.valor;
  }

  get getRuta() {
    return this.ruta;
  }
}
