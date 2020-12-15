const mongoose = require('mongoose')
const Schema = mongoose.Schema


var bicicletaSchema = new Schema({
    code: Number,
    color: String,
    modelo: String,
    ubicacion: {
        type: [Number], index: {type: '2dsphere', sparse: true}
    }
})

bicicletaSchema.static.createInstance = function(code, color, modelo, ubicacion){
    return new this({
        code: code,
        color: color,
        modelo: modelo,
        ubicacion: ubicacion
    })
}

bicicletaSchema.methods.toString = function(){
    return 'code: ' + this.code + ' | color: ' + this.color
}

bicicletaSchema.statics.allBicis = function(cb){
    return this.find({}, cb)
}

bicicletaSchema.statics.add = function(aBici, cb){
    this.create(aBici, cb)
}

module.exports = mongoose.model('Bicicleta', bicicletaSchema)