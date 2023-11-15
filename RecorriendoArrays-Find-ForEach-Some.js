var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ];

  //El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.
  //array.find(function(), thisArg)

var algunArticulo = articulos.find(function(articulo){
return (articulo.nombre = "Laptop");
});
console.log(algunArticulo);
console.log("******************");
//El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.
//array.forEach(function(), thisArg)
//array.forEach(function(element, index, array))

articulos.forEach(function(articulo){
    console.log(articulo);
});
console.log("*******************");

//El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).
//array.some(function(), thisArg)
//array.some(function(element, index, array))

var existeArticulo = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(existeArticulo);




