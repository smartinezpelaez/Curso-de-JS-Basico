// Coersión explícita
// valores falsy
var bol1 = Boolean(0) // false
var bol2 = Boolean("") // false
var bol3 = Boolean(null) // false
var bol4 = Boolean(undefined) // false
var bol5 = Boolean(NaN) // false
var bol6 = Boolean(false) // false

console.log(`${bol1};${bol2};${bol3};${bol4};${bol5};${bol6} `);

//También puedes realizar una coerción implícita con el operador de negación (!)

// Coersión implícita (no la uses)
!!0 // false
!!"" // false
!!null // false
!!undefined // false
!!NaN // false
!!false // false

// Coersión explícita 
// valores truthy
var bol7 = Boolean(12) // true
var bol8 = Boolean("hola") // true
var bol9 = Boolean(true) // true
var bol10 = Boolean([1, 2, 3]) // true
var bol11 = Boolean(function hola() {}) // true
var bol12 = Boolean({ a: 1, b: 2 }) // true
console.log(`${bol7};${bol8};${bol9};${bol10};${bol11};${bol12} `);


//en JavaScript todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos.
var bol13 = Boolean([]) // false
var bol14 = Boolean({}) // false
console.log(`${bol3};${bol4} `);



