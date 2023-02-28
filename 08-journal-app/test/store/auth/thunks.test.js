import { checkingCredentials } from '../../../src/store/auth/authSlice';
import { checkingAuthentication } from '../../../src/store/auth/thunks';

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThonks', () => {
  test('debe de invocar el checkingCredentials', async() => { 
      
      const dispatch = jest.fn();   
      await checkingAuthentication()(dispatch);
      expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );          
         
   })
})
