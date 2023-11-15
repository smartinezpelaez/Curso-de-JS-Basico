//Los condicionales son estructuras de control 

//Condicional if y else
function manejar(edad){
    if (edad >= 18){
        console.log("Puedes conducir")
    } else {
        console.log("No puedes conducir")
    }
}
manejar(18);

//Uso de if anidados
function calcularDescuento(articulos, precio) {
    var precioFinal;
  
    if (articulos <= 5) {
      //Hasta 5 artículos
      precioFinal = precio * (1 - 0.1);
    } else if (articulos > 5 && articulos <= 10) {
      //De 6 a 10 artículos
      precioFinal = precio * (1 - 0.15);
    } else {
      //De 10 artículos en adelante
      precioFinal = precio * (1 - 0.2);
    }  
    return precioFinal
  }
  
 console.log(calcularDescuento(4, 10)); // 9
 console.log(calcularDescuento(8, 20)); // 17
 console.log(calcularDescuento(15, 50)) // 40

//Operdaor Ternario
//condicion ? Bloque verdadero : Bloque falso
 function esPar(numero){
    return numero % 2 ===0 ? "es par" : "no es par";
 }
 console.log(esPar(9));
  