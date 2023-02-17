import { checkingAuthentication } from "../../../src/store/auth/thunks"

describe('Pruebas en AuthThonks', () => {
  test('debe de invocar el checkingCredentials', () => { 
        checkingAuthentication
   })
})
