
//-----Funcion declarativa
function Suma(a,b){
    return a+b;
}

//Invocamos la funcion declarativa
var resultado = Suma(2,3);
console.log(`La suma es ${resultado
}`);


//-----Funcion de expresion o anonimas
var resta = function(a,b){
    return a-b;
}

//Invocamos la funcion expresiva
var resultado = resta(8,4);
console.log(`La resta es ${resultado}`);


//ejemplos

//-----Funcion declarativa
function SaludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
}
//Invocamos
SaludarEstudiante("Steven MP");

//-----Funcion declarativa
function Sumar(a,b){
    var resul = a+b;
    return resul;
}
console.log (Sumar(8,8));

//
function solution(valor) {
    resul = typeof valor;
    return resul;
}
console.log (solution(1));
console.log (solution("Steven"));
console.log (solution(true));
console.log (solution([]));