class usuario {
  nombre;
  apellido;
  edad;
  conocimientos;
  empresa;

  constructor(nombre, apellido, edad, empresa) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.empresa = empresa;
    this.conocimientos = [];
  }
  // puedan anadir conocimientos

  anadirConocimiento(conocimiento) {
    this.conocimientos.push(conocimiento);
  }
  mostrarDatos() {
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.edad);
  }

  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  get getApellido() {
    return this.apellido;
  }

  set setApellido(apellido) {
    this.apellido = apellido;
  }
}

/* let usuarioEjemplo = new usuario("Borja", "Martin", 38);
console.log(usuarioEjemplo.getNombre);
usuarioEjemplo.setNombre = "Pepe";
usuarioEjemplo.mostrarDatos(); */
