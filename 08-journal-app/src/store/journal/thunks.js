import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../../helpers";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth; 

        // console.log(getState())
        // console.log('Start Note');

        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        }

        const newDoc = doc( 
            collection( firebaseDB, `${ uid }/journal/notes` )
         );

         const setDocResp = await setDoc( 
            newDoc, newNote
          );

        // console.log({newDoc, setDocResp});

        newNote.id = newDoc.id;
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );
    }
}

export const startLoagingNotes = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;

        if( !uid ) throw new Error( 'UID Dont exist' );

        const notes = await loadNotes( uid ); 
        dispatch( setNotes(notes) );

    }
}

export const startSaveNote = () =>  {
    return async ( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        console.log(noteToFirestore);

        const docRef = doc( firebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFirestore, { merge: true } );

        dispatch( updateNote( note ) );
        
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async ( dispatch ) => {
        dispatch( setSaving() );

        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) );
        }
        
        const photosUrls =  await Promise.all( fileUploadPromises );
        
        dispatch( setPhotosToActiveNote(photosUrls) );
        // console.log(photosUrls);
    }
} 

export const startDeletingNote = () => {
    return async( dispatch, getState ) => { 
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const docRef = doc( firebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id)  );
    }
}