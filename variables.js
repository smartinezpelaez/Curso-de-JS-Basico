var  name = "steven";
console.log(name);

//declarar 
var edad ;
//inicializar
edad = 30;

console.log(`Hola, ni nombre es ${name}, y tengo ${edad} años`)

var elementos = ["compu","celu","table"];

var persona = {
    nombre: "steven",
    edad: 38,
    direccion: "carrera 18",
    Cel: 31532587
}

// Usando un nombre diferente para el parámetro de la función
Object.entries(persona).forEach(([clave, valor]) => {
    console.log(`El valor de ${clave} es ${valor}`);
});

//array.forEach((persona, index) => {
  //  console.log(`los datos personales del empleado son ${persona} y el indice ${index}`);
//});


console.log(`Los elementos son ${elementos}`) ;