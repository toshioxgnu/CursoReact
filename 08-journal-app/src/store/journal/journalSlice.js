import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name : 'journal',
    initialState: {
        isSaving: false,
        savedMessage: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 0,
        //     imageUrl: [], //
        // }
   },
   reducers: {
         addNewEmptyNote: (state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
         },
         setActiveNote: (state, action) => {
            state.active = action.payload;
         },
         savingNewNote: (state) => {
            state.isSaving = true;
         },
         setNotes: (state, action) => {
            state.notes = action.payload;
         },
         setSaving: (state) => {
            state.isSaving = true;
            //TODO: Mensaje de error
         },
         updateNote: (state, action)=> {
            state.isSaving = false;
            state.notes = state.notes.map( note => {

               if( note.id === action.payload.id ) {
                  return action.payload;
               }

               return note;
            })
         },
         deleteNoteById: ( state,action ) => {

         }
     }
});

// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote, 
    setActiveNote, 
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote,  
} = journalSlice.actions;