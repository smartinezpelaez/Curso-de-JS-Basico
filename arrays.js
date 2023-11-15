//Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas
//var array = [1,2,3,4]
//array[índice]
//Para saber la cantidad de elementos de un array se utiliza la propiedad length

var array = [1,2,3,4,5,6,7,8,9];
console.log(array[0]);//1
console.log(array.length);//9

var nombres = ["steven","vane","vale","thiago"];
console.log(nombres[1]);
console.log(nombres.length-1);
nombres[0] = "Steven M";
console.log(nombres[0]);

//Existen métodos mutables, es decir, que cambian el array original.
// Estos métodos son:
// push: Agrega uno o varios elementos al final del array original.
// unshift: Agrega uno o varios elementos al inicio del array original.
// pop: Extrae el elemento del final del array original.
// shift: Extrae el elemento del inicio del array original.
// indexOf: El método indexOf muestra el índice del elemento especificado como argumento.
// sort: ordena en gorma acendente
// reverse: ordena en forma descendente
// slice: remueve los elementos que indiquemos en los parentesis
// splice es un slice controlado
// Comina dos arrays

//push
var arrayPush = [1,2,3];
arrayPush.push(4,5);
console.log(arrayPush);//[1,2,3,4,5]

//Unshift
var arrayUnshift = [3,4,5];
arrayUnshift.unshift(1,2);
console.log(arrayUnshift);//[1,2,3,4,5]

//pop
var arrayPop = [1,2,3,4];
var ultimoElemento = arrayPop.pop();
console.log(ultimoElemento);//4
console.log(arrayPop);//[1,2,3]

//shift
var arrayShift = [1,2,3,4];
var primerElemento = arrayShift.shift();
console.log(primerElemento);//1
console.log(arrayShift);//[2,3,4]

//indexOf
var arrayIndexOf = [1,2,3,4];
var index = arrayIndexOf.indexOf(3);
console.log(index);// posicion 2

//sort
var numerosSort = [23,41,64,5];
console.log(numerosSort.sort());

//reverse
var numerosReverse = [23,41,64,5];
console.log(numerosReverse.reverse());

//slice
var numerosSlice = [61,23,4,5,1];
var parte = numerosSlice.slice(3);
console.log(parte);//5,1

//splice
var numerosSplice = [61,23,4,5,1];
var part = numerosSplice.splice(1,1);
console.log (part);

//combine
var a = [1,2];
var b = [3,4];
console.log(a.concat(b));