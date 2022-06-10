// HTMLElement --> individual (1) find()
// HTMLCollection<HTMLELements> --> conjunto (1 o más) findAll

// buscar elementos:
// tag
let listas = document.getElementsByTagName("ul");
let elementosListas = document.getElementsByTagName("li");
console.log(listas);
console.log(elementosListas[0].innerHTML);
// id
// class
