
//hoisting o elevacion
console.log(nombre);
var nombre = "steven";//undefined

//Para una funcion
console.log(saludar());//Hola mundo
function saludar(){
    return "Hola mundo";
}

//Explicacion 
// Hoisting: Declara la función antes de ser invocada
function saludar() {
    return "Hola"
  }
  
  console.log( saludar() ) // "Hola"