var Bicicleta = require('../../models/bicicleta');

describe('Bicicleta.allBicis', () =>{
    it('Comienza vacio', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});