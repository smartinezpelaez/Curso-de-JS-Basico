//Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.detalle = function () {
        console.log(`Auto ${this.modelo} del ${this.annio}.`)
    }
}
console.log(auto);

var autoNuevo = new auto("Tesla", "Model 3", 2020);
console.log (autoNuevo.detalle());


var autoNuevo2 = new auto("Tesla", "Model X", 2023);
console.log (autoNuevo2.detalle());


var autoNuevo3 = new auto("Toyota", "Corolla", 2018);
console.log (autoNuevo3.detalle);
