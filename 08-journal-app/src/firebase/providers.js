import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async () => {
    try{
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credential = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }
        console.log(user);
    }catch (error){
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;

        return {
            ok: false,
            errorCode,
            errorMessage,
            email
        }
    }
}