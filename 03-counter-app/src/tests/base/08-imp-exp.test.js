import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas 08-imp-exp.test.js', () => {

    test('debe retornar un heroe por id' , () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroData =  heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroData );
    });


    test('debe retornar undefined si heroe no existe' , () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined );
    });

    test('debe retornar un arregl con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        
        const heroesData = heroes.filter( h => h.owner === owner);

        expect( heroes ).toEqual(heroesData);

    });

    test('deve retornar un arreglo con los heroes de marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toEqual( 2 );
    })
    
    
    
});