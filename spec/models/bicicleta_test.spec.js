const Bicicleta = require("../../models/bicicleta")

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