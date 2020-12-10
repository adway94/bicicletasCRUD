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

Bicicleta.findById =(aBiciId) =>{
    let aBici = Bicicleta.allBicis.find(x => x.id == aBiciId)
    if (aBici)
        return aBici
    else 
        throw new Error (`No existe una bicicleta con el id ${aBici}`)
}

Bicicleta.removeById = (aBiciId) => {
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
        if(Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i,1)
            break
        }
    }
}

/*
var a = new Bicicleta(1, "Rojo", "Urbano", [-31.731835,-60.5368057]);
var b = new Bicicleta(2, "Azul", "Montaña", [-31.730211,-60.5341283]);

Bicicleta.add(a)
Bicicleta.add(b)
*/

module.exports = Bicicleta;

