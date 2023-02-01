import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../src/firebase/config";

export const loadNotes = async ( uid = '' ) => {
    if( !uid ) throw new Error( 'UID Dont exist' );

    const collectionRef = collection( firebaseDB, `${ uid }/journal/notes` );

    const docs = await getDocs(collectionRef);

    // console.log(docs);
    const notes = [];
    docs.forEach(
        doc => {
            notes.push({
                id: doc.id,
                ...doc.data()
            })
        }
    );
    console.log(notes);
    return notes;
}