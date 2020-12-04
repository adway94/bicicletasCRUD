var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id
    this.color = color
    this.modelo = modelo
    this.ubicacion = ubicacion
}

Bicicleta.prototype.toString = function(){
    return "id: " + this.id + " |Color: " + this.color;
}

Bicicleta.allBicis = [];
Bicicleta.add = (aBici) => {
    Bicicleta.allBicis.push(aBici);
}

var a = new Bicicleta(1, "Rojo", "Urbano", [-31.731835,-60.5368057]);
var b = new Bicicleta(2, "Azul", "Montaña", [-31.730211,-60.5341283]);

Bicicleta.add(a)
Bicicleta.add(b)

module.exports = Bicicleta;

