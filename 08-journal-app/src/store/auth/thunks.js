import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice"


export const checkingAuthentication = ( email, passwd ) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
    }
}


export const startGoogleSignIn= () => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const result = await singInWithGoogle();
        console.log({result});
    }
}