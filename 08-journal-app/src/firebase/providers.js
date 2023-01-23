import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp);

        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return {
            ok: true,
            uid,photoURL,displayName, email,
        }

    }catch(error ) {
        return{
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    //! signwithemailandpassword
    try{
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;
        console.log(resp);

        return{
            ok: true,
            uid,photoURL,displayName, email,
        }
    }catch(error) {
        return{
            ok: false,
            errorMessage: error.message,
        }
    }
}