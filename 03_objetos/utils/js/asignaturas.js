let asignaturas = {
  results: [
    {
      nombre: "Programacion",
      horas: 8,
      curso: 1,
      imagen:
        "https://www.programmerszone.ae/wp-content/uploads/2021/10/programming-evolution.jpg",
    },
    {
      nombre: "Base datos",
      horas: 6,
      curso: 1,
      imagen: "http://blog.cloudflare.com/content/images/2022/05/image1-22.png",
    },
    {
      nombre: "Lenguaje Marcas",
      horas: 5,
      curso: 1,
      imagen:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      nombre: "Programación multimedia",
      horas: 4,
      curso: 2,
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3vK5eZst_syxgKyGBKSl7odXXg1E49IlIg&usqp=CAU",
    },
    {
      nombre: "Desarrollo interfaces",
      horas: 6,
      curso: 2,
      imagen:
        "https://sm-services.es/wp-content/uploads/2021/02/MEAN-Stack.jpg",
    },
  ],
  numero: 2,
  ciclo: "DAM",
};

let contenedorAsignaturas = document.querySelector(".row");

console.log(asignaturas["ciclo"]);
console.log(asignaturas.numero);
console.log(asignaturas.results);
console.log(asignaturas.results[0].nombre);
asignaturas.results.forEach((element) => {
  contenedorAsignaturas.innerHTML = `${contenedorAsignaturas.innerHTML}
   <div class="col">
    <div class="card" style="width: 18rem;">
  <img src="${element.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.nombre}</h5>
    <p class="card-text">Curso: ${element.curso}</p>
  </div>
</div>
</div>`;
});
