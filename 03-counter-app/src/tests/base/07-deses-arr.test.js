import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas 07-deses-arr.test.js', () =>{
    test('debe retornar un string y un numero', () => {
        const arr = retornaArreglo();//

        expect( arr ).toEqual( ['ABC', 123] );
    })
    
});