//Coerción Implicita

var coe1 = 4 + "7";
var coe2 = 4 * "7";
var coe3 = 2 + true;
var coe4 = false - 3;
console.log(`resultados = ${coe1} ; ${coe2} ; ${coe3} ; ${coe4}`);
console.log(`resultados = ${typeof coe1} ; ${typeof coe2} ; ${typeof coe3} ; ${typeof coe4}`);

//Coerción Explicita

var coe5 = Number("7");
var coe6= String(51);
var coe7= Boolean(1);
console.log(`resultados = ${coe5}; ${coe6}; ${coe7}`);
console.log(`resultados = ${typeof coe5} ; ${typeof coe6} ; ${typeof coe7}`);