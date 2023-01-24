import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name : 'journal',
    initialState: {
        isSaving: true,
        savedMessage: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 0,
        //     imageUrl: '', //
        // }
   },
   reducers: {
         addNewEmptyNote: (state, action ) => {
            state.notes.push( action.payload );
         },
         setActiveNote: (state, action) => {

         },
         setNotes: (state, action) => {

         },
         setSaving: (state) => {

         },
         updateNote: (state, action)=> {

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
} = journalSlice.actions;