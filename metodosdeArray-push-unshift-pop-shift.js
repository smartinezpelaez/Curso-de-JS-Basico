//Agregar al final= .push() Eliminar al final= .pop()
//Agregar al inicio= .unshift() Eliminar al inicio= .shift()

//Metodo push
let numArray1 = [1,2,3,4,5];
function newNumEnd(){
    numArray1.push(6,7,8,9);
    console.log(numArray1);
}

newNumEnd();//agrega el 6,7,8,9
console.log("***************************");

//Metodo pop
let numArray2 = [1,2,3,4,5,6];
function deleteNumEnd(){
    numArray2.pop();
    console.log(numArray2);
}
deleteNumEnd();//quita el 6
console.log("***************************");

//Metodo Unshift
let numArray3 = [2,3,4,5];
function addNumIni(){
    numArray3.unshift(1);
    console.log(numArray3);
}
addNumIni();
console.log("****************************");

//Metodo shift
let numArray4 = [0,1,2,3,4,5];
function addNumFin(){
    numArray4.shift();
    console.log(numArray4);
}
addNumFin();
console.log("****************************");
































