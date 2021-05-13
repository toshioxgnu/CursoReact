import '@testing-library/jest-dom';


import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe de retornar hola Goku', () => {
        const nombre  = 'Goku';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre + "!");
    });

    //getSaludo debe retornar hola carlos! si no hay argumentos en el nombre
    test('getSaludo debe de retornar hola carlos si no hay argumentos', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos!');
    });
});