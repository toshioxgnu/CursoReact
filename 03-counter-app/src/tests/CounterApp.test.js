import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';


describe(' Pruebas en Counter App ', () => {

    let  wrapper  = shallow( <CounterApp value={ 10 } /> );
    
    beforeEach( () => {
        wrapper  = shallow( <CounterApp value={ 10 } /> );
    });
    
    test('debe mostrar counter app correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar valor por defecto de 100', () => {
        const counterText = wrapper.find('h2').text();
        expect( counterText ).toBe( ' 10 ' );
    });

    test('Debe incrementar con el boton de +1 ', () => {
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('11');

    });

    test('Debe restar con el boton de -1 ', () => {
        const btn1 = wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('9');

    });

    test('Debe colocar el valor por defecto con el boton reset ', () => {
        const wrapper  = shallow( <CounterApp value={ 10 } /> );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('10');
    })
    
});