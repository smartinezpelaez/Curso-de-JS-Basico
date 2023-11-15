// Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

// El método filter valida si una condicion es verdadera o falsa y retorna un nuevo array recibe dos argumentos:
// var otherArray = array.filter(function(), thisArg)
// const other = array.filter(function(element, index, array))

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

console.log(articulosFiltrados);


//El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).
//ayuda a mapear ciertos articulos

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
  })
  console.log(nombreArticulos) 
































