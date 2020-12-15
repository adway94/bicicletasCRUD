const Bicicleta = require('../../models/bicicleta')
const mongoose = require('mongoose')

describe('Testing Bicicleta', function(){
    beforeEach(function(done){
        const mongoDB = 'mongodb://localhost/testdb'
        mongoose.connect(mongoDB, {useNewUrlParser: true})

        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'conection error'))
        db.once('open', function(){
            console.log('We are connected to test database!')
            done()
        })
    })
    afterEach(function(done){
        Bicicleta.deleteMany({}, function(err, succes){
            if (err) console.log(err)
            done()
        })
    })

    describe('Bicicleta.createInstance',() => {
        it('crea una instancia de Bicicleta', () => {
            let bici = Bicicleta.createInstance(1, 'verde', 'urbana', [-34.5, -36.3])

            expect(bici.code).toBe(1)
            expect(bici.color).toBe('verde')
            expect(bici.modelo).toBe('urbana')
            expect(bici.ubicacion[0]).toBe(-34.5)
            expect(bici.ubicacion[1]).toBe(-36.3)
        })
    })

})


/*

beforeEach(() => { Bicicleta.allBicis = [] })

describe('Bicicleta.allBicis', () => {
    it('comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0)
    })
})

describe('Bicicleta.add', () =>{
    it('Agregar una', () =>{
        expect(Bicicleta.allBicis.length).toBe(0)
        
        let a = new Bicicleta(1, "Rojo", "Urbano", [-31.731835,-60.5368057]);
        Bicicleta.add(a)
        
        expect(Bicicleta.allBicis.length).toBe(1)
        expect(Bicicleta.allBicis[0]).toEqual(a)
        
    })
})

describe('Bicicleta.findById', () => {
    it('Debe devolver la bici con id 1', () =>{
        expect(Bicicleta.allBicis.length).toBe(0)
        let aBici1 = new Bicicleta(1, "Verde", "Montaña", [-31.731835,-60.5368057]);
        let aBici2 = new Bicicleta(2, "Rojo", "Urbano", [-31.731835,-60.5368057]);
        Bicicleta.add(aBici1)
        Bicicleta.add(aBici2)

        let targetBici = Bicicleta.findById(1)
        expect(targetBici.id).toBe(1)
        expect(targetBici.color).toBe(aBici1.color)
        expect(targetBici.modelo).toBe(aBici1.modelo)


    })
})

*/