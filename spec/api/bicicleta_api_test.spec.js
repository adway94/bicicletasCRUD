const Bicicleta = require("../../models/bicicleta")
const request = require("request")
const server = require('../../bin/www')


describe('Bicicleta Api', () => {
    describe('GET BICICLETAS /', () => {
        it('Status 200', () =>{
            expect(Bicicleta.allBicis.length).toBe(0)

            let a = new Bicicleta(1, "Rojo", "Urbano", [-31.731835,-60.5368057])
            Bicicleta.add(a)

            request.get('http://localhost:3000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200)
            })
        })
    })
    
    describe('POST BICICLETAS /create', () => {
        it('Status 200', (done)=>{
            let headers = {'content-type' : 'application/json'}
            let aBici = '{"id" : 10, "color":"rojo", "modelo":"urbana", "lat": -34, "lng": -54 }'
            request.post({
                headers: headers,
                url: 'http://localhost:3000/api/bicicletas/create',
                body: aBici
            }, (error, response, body) =>{
                expect(response.statusCode).toBe(200)
                expect(Bicicleta.findById(10).color).toBe('rojo')
                done()
            })
        })
    })
})