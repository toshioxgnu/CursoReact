import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name : 'auth',
    initialState: {
       status:'not-authenticated', //'not-authenticated', 'authenticated','checking'
       uid: null,
       email: null,
       displayName: null,
       photoURL: null,
       errorMessage: null,
   },
   reducers: {
         login: ( state,  { payload } ) => {
            state.status = 'authenticated'; //'not-authenticated', 'authenticated','checking'
            state.uid= payload.uid;
            state.email= payload.email;
            state.displayName= payload.displayName;
            state.photoURL= payload.photoURL;
            state.errorMessage= null;
         },
         logout: ( state, {payload} ) => {
            state.status = 'not-authenticated'; //'not-authenticated', 'authenticated','checking'
            state.uid= null;
            state.email= null;
            state.displayNam= null;
            state.photoURL= null;
            state.errorMessage= payload;
         },
         checkingCredentials: ( state, payload ) => {
            state.status = 'checking'; //'not-authenticated', 'authenticated','checking'
         }
      }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;