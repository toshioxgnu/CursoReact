import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth; 

        console.log(getState())
        console.log('Start Note');

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( 
            collection( firebaseDB, `${ uid }/journal/notes` )
         );

         const setDocResp = await setDoc( 
            newDoc, newNote
          );

        console.log({newDoc, setDocResp});

        //!TODO: dispatch
        newNote.id = newDoc.id;
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
    }
}

export const startLoagindNotes = () => {
    
}

