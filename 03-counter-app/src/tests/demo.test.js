
describe('Pruebas en el archivo demo.tesy.js', () => {
    
    test('deben ser iguales los string', () => {
        // 1.- Inicializacion 
        const mensaje = 'Hola mundo';

        //2.- Estimulo
        const mensaje2 = "Hola mundo";

        //3.- Observar el comportamiento
        expect( mensaje  ).toBe(mensaje2); 
    });
});


