//Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

// for (condición) {
//     // Bloque de código
// }

//Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.
// while (condición) {
//     // Bloque de código
//     // Cambiar la condición para salir del bucle
// }


for (var i = 1; i <= 10; i++ ){
    console.log(`Numero = ${i}`);
}

var nombres = ["steven","vane","vale","thiago"];
for (let i = 0; i < nombres.length; i++) {
    console.log(`El nombre que escogio fue = ${nombres[0]}`);    
}

var numeros = [5,4,3,2,1];
for(var i = 0 ; i < numeros.length ; i ++){
    numeros[i] = numeros[i] * 2;
}
console.log(numeros);

var estudiantes = ["Pepe","Rosa","Ana","Loki"];
function SaludarEstudianteLoop(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for (let i = 0; i < estudiantes.length; i++) {
   SaludarEstudianteLoop(estudiantes[i]);    
}

for (const estudiante of estudiantes) {
    SaludarEstudianteLoop(estudiante);
}

//ciclo while 
var num = 1;
while (num <= 10 ){
    console.log(num);
    num++;
}

var estudiantesWhile = ["Pepe","Rosa","Ana","Loki"];
function SaludarEstudianteWhile(estu){
    console.log(`Hola, ${estu}`);
}

while (estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    SaludarEstudianteWhile(estudiante);
}
