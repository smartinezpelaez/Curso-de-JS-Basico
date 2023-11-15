//Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas.

// var objeto = {
//     clave1: "valor1",
//    "clave 2": "valor2",
// }

//object
var miAuto = {
    marca : "Toyota",
    modelo : "Corolla",
    anio : 2020,
    detalle : function(){
        console.log(`Auto ${this.modelo} y es del ${this.anio}`);
    }
}

console.log(miAuto.marca);
console.log(miAuto.modelo);
console.log(miAuto.anio);
console.log(miAuto.detalle());