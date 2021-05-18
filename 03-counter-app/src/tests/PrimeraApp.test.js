import React from 'react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


describe('Pruebas en <PrimeraApp />', () => {

    //test('debe mostrar el mensaje Hola Soy Goku', () => {

        //const saludo = 'Hola, soy Goku';

        //const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

        //expect( getByText(saludo) ).toBeInTheDocument();

    //});

    test('Debe de mostrar <PrimeraApp /> Correctamente', () => {
        const saludo = 'Hola, Soy goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar el subtitulo enviado por props ', () => {
        const saludo = 'Hola, Soy goku';
        const subtitulo = 'Test Subtitulo';
        const wrapper = shallow( <PrimeraApp 
            saludo={ saludo } 
            subtitulo = {subtitulo}
            /> 
            );
        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);
    })
    
    
    
});