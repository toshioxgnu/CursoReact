import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas 05-Funciones.test.js', () => {

    test('getUser Debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
       
        expect( user ).toEqual( userTest );

    });

    test('getUser Debe retornar un objeto', () => {

        const nombre = 'El_Papi1502';
        const user = getUsuarioActivo(nombre);

        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    });

});