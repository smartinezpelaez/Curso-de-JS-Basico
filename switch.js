//La estructura switch es otra manera de evaluar condiciones

// switch (expresion) {
//     case 1: {
//       // Bloque 1
//       break
//     }
//     case 2: {
//      // Bloque 2
//       break
//     }
//     default: {
//       // Bloque por defecto
//     }
//   }

function semaforo(color){
switch (color){
    case "verde":{
        console.log("¡Adelante puedes pasar!");
        break
    }
    case "amarillo":{
        console.log("¡Cuidado debes detenerte!");
        break
    }
    case "rojo":{
        console.log("¡No puedes avanzar!");
        break
    }
    default:{
        console.log("¡No reconozco el color el semaforo esta dañado!");
    }
}
}
console.log(semaforo("rojo"));

function saberNumero(num){
    switch (num){
        case 1 :
            console.log("soy el uno!");
            break        
        case 10 :
            console.log("soy el diez!");
            break
        case 100:
            console.log("soy el cien!");
            break
        default:
            console.log("no soy ninguno de los que esta en el listado")
    }
}
console.log(saberNumero(10));


function solution(articulo){
    switch(articulo){
        case "computadora":
            console.log("Con mi computadora puedo programar usando JavaScript!");
            break
        case "celular": 
            console.log("En mi celular puedo aprender usando la app de Platzi!");
            break
        case "cable":
            console.log("¡Hay un cable en mi bota!");
            break
        default:
            console.log("Artículo no encontrado");
    }
}

console.log(solution("computadora"));














