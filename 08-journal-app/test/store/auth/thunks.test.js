import { singInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { checkingAuthentication, startGoogleSignIn } from '../../../src/store/auth/thunks';
import { demoUser } from '../../fixtures/authFixtures'

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThonks', () => {
  const dispatch = jest.fn();   

  beforeEach( () => jest.clearAllMocks() );

  test('debe de invocar el checkingCredentials', async() => { 
      
      // primera es la invocacion de la funcion, el segundo es el valor de retorno de la funcion 
      await checkingAuthentication()(dispatch);
      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );          
         
   });

   
   test('startGoogleSignIn debe llamar el checking credentials', async() => {
     
      const loginData = {
         ok: true,
         ...demoUser
      };

      
      await singInWithGoogle.mockResolvedValue( loginData ); 
      await startGoogleSignIn()( dispatch )

      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
      expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );


   })
   

   test('startGoogleSignIn debe llamar el checking credentials logout - Error', async() => {
     
      const loginData = {
         ok: false,
         errorMessage: 'Un error en Google'
      };
      await singInWithGoogle.mockResolvedValue( loginData ); 


      await startGoogleSignIn()(dispatch)
      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
      expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );


   })


})
