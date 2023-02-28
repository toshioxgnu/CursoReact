import { checkingCredentials } from '../../../src/store/auth/authSlice';
import { checkingAuthentication } from '../../../src/store/auth/thunks';

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThonks', () => {
  const dispatch = jest.fn();   

  beforeEach( () => jest.clearAllMocks() );

  test('debe de invocar el checkingCredentials', async() => { 
      
      // primera es la invocacion de la funcion, el segundo es el valor de retorno de la funcion 
      await checkingAuthentication()(dispatch);
      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );          
         
   })
})
