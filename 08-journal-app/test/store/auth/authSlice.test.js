import { logout } from '../../../src/store/auth/authSlice';
import { authSlice, login } from '../../../src/store/auth/authSlice';
import { authenticatedState, demoUser, initialState } from '../../fixtures/authFixtures'
 
describe('Pruebas en el auth Slice', () => {
  
    test('debe de regresar el estado inicial y llamarse "auth"', () => {
      
        expect( authSlice.name ).toBe('auth');
        const state = authSlice.reducer( initialState, {} );
        expect( state ). toEqual( initialState );

    });

    test('debe de realizar la autenticacion', () => { 
        const state = authSlice.reducer( initialState, login( demoUser ) );
        expect( state ).toEqual({
            status:'authenticated', //'not-authenticated', 'authenticated','checking'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });
     });

     test('debe de realizar el logout sin argumentos', () => { 
        const state = authSlice.reducer( authenticatedState, logout() );
        expect( state ).toEqual({
            status:'not-authenticated', //'not-authenticated', 'authenticated','checking'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });

      });

    test('debe de realizar el logout y mostrar un mensaje de error', () => { 
        const errorMessage = 'Credenciales no son Correctas'

        const state = authSlice.reducer( authenticatedState, logout({ errorMessage }) );
        expect( state ).toEqual({
            status:'not-authenticated', //'not-authenticated', 'authenticated','checking'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        });
    });

});
