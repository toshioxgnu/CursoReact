import { checkingCredentials } from "./authSlice"


export const checkingAuthentication = ( email, passwd ) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
    }
}
